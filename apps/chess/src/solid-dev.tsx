import { createMemo, createEffect, createSignal, For, DEV, getOwner, Show } from "solid-js";
import { render as renderWeb } from "solid-js/web";
import { Dynamic } from "solid-three";
import CaretDownFilled from "~icons/ant-design/caret-down-filled";
import CaretRightFilled from "~icons/ant-design/caret-right-filled";

let owner;

export function render(fn, root) {
  renderWeb(() => {
    owner = getOwner();
    // @ts-ignore
    window.DEV = DEV;
    // @ts-ignore
    window.owner = owner;
    return fn();
  }, root);
}

function firstLowerCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function getTree(owner) {
  console.log(owner);
  let node = {
    owner: owner,
    componentName:
      (owner.componentName?.startsWith("_Hot$$")
        ? owner.componentName.slice(6)
        : owner.componentName) || "(anonymous)",
    children: []
  };

  function visitThreeChildren(parent, object) {
    object.__r3f.objects.forEach(o => {
      let tree = {
        componentName: firstLowerCase(o.type),
        owner: o,
        children: []
      };

      if (o?.__r3f) {
        visitThreeChildren(parent, o);
      }

      parent.children.push(tree);
    });
  }

  function visitThreeNode(owner) {
    owner.componentName = firstLowerCase(owner.value.type);
    let tree = getTree(owner);
    visitThreeChildren(tree, owner.value);
    node.children.push(tree);
    return tree;
  }

  function visitOwner(owner) {
    if (owner.componentName) {
      node.children.push(getTree(owner));
    } else {
      if (owner.value?.__r3f) {
        visitThreeNode(owner);
      } else if (Array.isArray(owner.value)) {
        // owner.componentName = firstLowerCase(owner.value[0].type);
        // let tree = getTree(owner.value[0]);
        owner.value.forEach(o => {
          if (o?.__r3f) {
            console.log(o?.__r3f);
            let tree = {
              componentName: getThreeTypeName(o),
              owner: o,
              children: []
            };
            visitThreeChildren(tree, o);
            node.children.push(tree);
          }
        });
        // node.children.push(tree);
      }

      visitOwners(owner);
    }
    return node;
  }

  function visitOwners(owner) {
    let f = owner.owned?.find(o => o.componentName === "For");
    // if (f) {
    //   console.log("FOOR", f, owner, owner.owned, owner.owned.indexOf(f));
    //   let o = owner.owned[owner.owned.indexOf(f) + 1];
    //   visitOwner(o);
    //   // node.children.push(getTree(owner));
    // }
    owner.owned?.forEach(child => {
      visitOwner(child);
    });
  }

  visitOwners(owner);

  // owner.owned.forEach(o => {
  //    else {
  //     node.children.push({
  //       atom: o
  //     });
  //   }
  // });

  console.log(node);
  return node;
}

function getThreeTypeName(o: any) {
  console.log(o);
  return o.type !== "Object3D" ? firstLowerCase(o.type) : o.prototype;
}

export function Devtools() {
  const [signal, setSignal] = createSignal(0);
  const tree = createMemo(() => {
    signal();

    return getTree(owner);
  });

  createEffect(() => {
    setTimeout(() => {
      setSignal(s => s + 1);
    }, 1000);
  });
  return (
    <div
      id="devtools"
      class="overflow-scroll fixed z-50 top-0 left-0 filter 
      select-none h-screen w-[30vw] bg-white bg-opacity-50 px-4 py-2 shadow-lg"
    >
      <Node node={tree()} />
    </div>
  );
}

function Node(props) {
  const [toggle, setToggle] = createSignal(true);
  return (
    <div class="relative flex flex-col font-mono text-xs">
      <div class="flex flex-row items-center space-x-1">
        <div>
          <Show when={props.node.children?.length} fallback={<div class="w-4" />}>
            <Dynamic
              component={toggle() ? CaretDownFilled : CaretRightFilled}
              onClick={() => setToggle(t => !t)}
              class={"text-[0.6rem] w-4"}
            />
          </Show>
        </div>

        <div>{props.node.componentName}</div>
      </div>
      <Show when={toggle()}>
        <div class="ml-4 flex flex-col space-y-1">
          <For each={props.node.children}>
            {child => (
              <div>
                <Node node={child} />
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}
