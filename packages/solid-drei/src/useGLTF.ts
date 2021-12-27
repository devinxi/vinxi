import { createResource } from "solid-js";
import { loadingFn } from "solid-three";
import { Loader } from "three";
import { GLTFLoader, DRACOLoader, GLTF } from "three-stdlib";

let dracoLoader: DRACOLoader | null = null;

function extensions(
  useDraco: boolean | string,
  useMeshopt: boolean,
  extendLoader?: (loader: GLTFLoader) => void
) {
  return (loader: Loader) => {
    if (extendLoader) {
      extendLoader(loader as GLTFLoader);
    }
    if (useDraco) {
      if (!dracoLoader) {
        dracoLoader = new DRACOLoader();
      }
      dracoLoader.setDecoderPath(
        typeof useDraco === "string"
          ? useDraco
          : "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"
      );
      (loader as GLTFLoader).setDRACOLoader(dracoLoader);
    }
    // if (useMeshopt) {
    //   (loader as GLTFLoader).setMeshoptDecoder(
    //     typeof MeshoptDecoder === "function" ? MeshoptDecoder() : MeshoptDecoder
    //   );
    // }
  };
}

export function useGLTF<T extends string | string[], Data extends GLTF>(
  path: T,
  useDraco: boolean | string = true,
  useMeshOpt: boolean = true,
  extendLoader?: (loader: GLTFLoader) => void
) {
  return createResource(
    () => path,
    async path => {
      return (
        await loadingFn(extensions(useDraco, useMeshOpt, extendLoader), () => {})(
          GLTFLoader as any,
          path as string
        )
      )[0] as Data;
    }
  );
}

// useGLTF.preload = (
//   path: string | string[],
//   useDraco: boolean | string = true,
//   useMeshOpt: boolean = true,
//   extendLoader?: (loader: GLTFLoader) => void
// ) =>
//   useLoader.preload(
//     GLTFLoader,
//     path,
//     extensions(useDraco, useMeshOpt, extendLoader)
//   );

// useGLTF.clear = (input: string | string[]) =>
//   useLoader.clear(GLTFLoader, input);
