import { ControlInput } from "./ControlInput";
import { log, LevaErrors } from "../../utils/log";
import { Plugins } from "../../plugin-system";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
// import { Monitor } from "../Monitor";
import { Input, useInput } from "../../hooks";
import { SpecialInputs } from "../../types";
import { Match, Show, Switch, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

type ControlProps = { path: string };

const specialComponents = {
  [SpecialInputs.BUTTON]: Button,
  [SpecialInputs.BUTTON_GROUP]: ButtonGroup
  // [SpecialInputs.MONITOR]: Monitor,
};

export const Control = props => {
  const [input, { set, setSettings, disable, storeId, emitOnEditStart, emitOnEditEnd }] = useInput(
    props.path
  );
  // if (!input) return null;

  // if (inptype in SpecialInputs) {
  //   const SpecialInputForType = specialComponents[type];
  //   return (
  //   );
  // }

  // if (!(type in Plugins)) {
  //   log(LevaErrors.UNSUPPORTED_INPUT, type, props.path);
  //   return null;
  // }


  return (
    <Switch>
      <Match when={!input()}>{null}</Match>
      <Match when={input()!.type in SpecialInputs ? input() : undefined}>
        <Dynamic component={specialComponents[input()!.type]} path={props.path} {...input()} />
      </Match>
      <Match when={input()!.type in Plugins ? input() : undefined}>
        <ControlInput
          type={input()!.type}
          label={input()!.label}
          storeId={storeId}
          path={props.path}
          valueKey={input()!.key}
          setValue={set}
          value={(input as any)().value}
          setSettings={setSettings}
          settings={(input as any)().settings}
          disable={disable}
          emitOnEditStart={emitOnEditStart}
          emitOnEditEnd={emitOnEditEnd}
          fromPanel={true}
          disabled={false}
          optional={false}
        />
      </Match>
    </Switch>
  );
};
