import * as React, {
  forwardRef,
  useLayoutEffect,
  createEffect,
  useMemo,
} from "solid-js";
import { useThree } from "solid-three";
import { TransformControls as TransformControlsImpl } from "@react-three/drei";
import { createStore } from "@/lib/zustand";
import { Event } from "three";
import { OrbitControls } from "three-stdlib";

export const useEditorStore = createStore(
  {
    transforming: false,
    orbitControls: null as null | OrbitControls,
  },
  (set, get, api) => ({})
);
