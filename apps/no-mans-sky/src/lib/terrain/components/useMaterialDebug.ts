import * as React from "react";
import { useThree } from "solid-three";

import { Scene, Camera, Mesh, PlaneGeometry } from "three";
import toast from "react-hot-toast";

function printErrors(name: string, shader: string, errors: [string, any], originalShader: string) {
  Object.entries(errors).forEach(([_, error]) => {
    const errorLineText = shader.split("\n")[error.line - 1];
    const originalShaderLine = originalShader
      .split("\n")
      .findIndex((x: any) => x === errorLineText);

    toast.error(`[${name} shader][${originalShaderLine}] ${error.message}`, {
      style: {
        borderRadius: "24px",
        fontSize: "11px",
        maxWidth: "600px",
        background: "#333",
        color: "#fff"
      }
    });
  });
}

function debug(context: WebGLRenderingContext, sourceCode: string, type: number) {
  const shader = context.createShader(type)!;
  context.shaderSource(shader, sourceCode);
  context.compileShader(shader);

  if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
    const errorMessage = context.getShaderInfoLog(shader);
    const newMessages = [];

    if (errorMessage) {
      // The error to refers to a string index of 1 if the shader starts with a single/double quote. Interesting.
      const errorMessages = errorMessage
        .split(/ERROR: [0-9]+:/)
        .map((x: string) => x.replace("\n", ""));

      for (const message of errorMessages) {
        if (!message) {
          continue;
        }

        const lineNumber = Number(message.match(/[0-9]+/)![0]);
        newMessages.push({
          line: lineNumber > 0 ? lineNumber : 1,
          message: message.replace(/[0-9]+: /, "")
        });
      }
    }
    throw newMessages;
  }
}

function useMaterialDebug(material: new () => any) {
  const renderer = useThree(state => state.gl);
  const context = renderer.getContext();

  React.createEffect(() => {
    const scene = new Scene();
    const mesh = new Mesh(new PlaneGeometry(), new material());
    scene.add(mesh);

    renderer.compile(scene, new Camera());

    const properties = renderer.properties;
    const { currentProgram } = properties.get(mesh.material);

    const vertexSource = renderer.getContext().getShaderSource(currentProgram.vertexShader)!;
    const fragmentSource = renderer.getContext().getShaderSource(currentProgram.fragmentShader)!;

    try {
      debug(context, fragmentSource, renderer.getContext().FRAGMENT_SHADER);
    } catch (err: any) {
      printErrors("fragment", fragmentSource, err, mesh.material.fragmentShader);
    }

    try {
      debug(context, vertexSource, renderer.getContext().VERTEX_SHADER);
    } catch (err: any) {
      printErrors("vertex", vertexSource, err, mesh.material.vertexShader);
    }
  });
}

export default useMaterialDebug;
