/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
// import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
// import { folder, useControls } from "@/lib/leva";
// import * as React from "src/react";
// import { useSpring } from "@react-spring/core";
// import { a } from "@react-spring/three";
// import { Color, PieceSymbol, Square } from "@/lib/chess/types";
// import { useAtom } from "jotai";
// import { $ } from "src/atoms";
// import { useHover } from "../../lib/useHover";
import {
  BISHOP,
  BLACK,
  KING,
  KNIGHT,
  PAWN,
  QUEEN,
  ROOK,
  Square,
} from "@/lib/chess";
// import { useAtomValue } from "jotai/utils";
import { Color, useFrame } from "solid-three";
import { useGLTF } from "src/drei/useGLTF";
import { useRef } from "src/react";
import { createEffect, Suspense } from "solid-js";
import { mergeProps } from "solid-js";
import { folder, useControls } from "@/lib/leva";
import { PieceSymbol } from "@/lib/chess/types";

type GLTFResult = GLTF & {
  nodes: {
    Rook: THREE.Mesh;
    Queen: THREE.Mesh;
    Bishop: THREE.Mesh;
    King: THREE.Mesh;
    Knight: THREE.Mesh;
    Pawn: THREE.Mesh;
  };
  materials: {
    white_piece: THREE.MeshStandardMaterial;
    black_piece: THREE.MeshStandardMaterial;
  };
};

const pieceMap = {
  [PAWN]: "Pawn",
  [ROOK]: "Rook",
  [QUEEN]: "Queen",
  [KING]: "King",
  [KNIGHT]: "Knight",
  [BISHOP]: "Bishop",
} as const;

// const ControlledPiece = () => {
//   const props = useControls("piece", {
//     position: { value: [0, 0, 0], step: 1 },
//     color: { options: ["black", "white"] },
//     piece: {
//       options: ["Queen", "King", "Bishop", "Knight", "Rook", "Pawn"] as const,
//     },
//   });
//   return <Piece {...props} />;
// };

export function Piece(props) {
  // {
  //   piece = QUEEN as PieceSymbol,
  //   color = BLACK as Color,
  //   square = "a1" as Square,
  //   position = [0, 0, 0] as [number, number, number],
  //   ...props
  // }

  props = mergeProps(
    {
      piece: QUEEN,
      color: BLACK,
      square: "a1",
      position: [0, 0, 0],
    },
    props
  );

  const [controls] = useControls("piece", {
    color: folder({ black: "#414141", white: "#c4bdbd" }),
  });

  // const [x, y, z] = position;

  // const ref = React.useRef<THREE.Object3D>();

  // useFrame(() => {});

  // const [isSquareHovered, setIsSquareHovered] = useAtom(
  //   $.isHoveredSquare(square)
  // );

  // const [selectedSquare, setSelectedSquare] = useAtom($.selectedSquare);
  // const isSelected = selectedSquare === square;
  // const [_, bind] = useHover({
  //   onPointerEnter: (e) => {
  //     setIsSquareHovered(true);
  //   },
  //   onPointerLeave: (e) => {
  //     setIsSquareHovered(false);
  //   },
  // });
  // const turn = useAtomValue($.turn);
  // const isSelectable = color === turn;

  // const { spring: hoverSpring } = useSpring({
  //   spring: (isSquareHovered && isSelectable) || isSelected ? 1 : 0,
  //   config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  // });

  // const positionY = hoverSpring.to([0, 1], [y, y + 0.3]);
  // const rotationY = hoverSpring.to([0, 1], [0, 0.5]);

  return (
    <group position={props.position} rotation-y={0}>
      <PieceModel
        // {...bind}
        piece={pieceMap[props.piece]}
        onPointerDown={() => {
          if (color === turn) {
            setSelectedSquare(square);
          }
        }}
        rotation={[
          -Math.PI / 4,
          0,
          0,
          // props.color === BLACK ? (5 / 4) * Math.PI : Math.PI / 4,
        ]}
        // material={props.color === BLACK ? "black_piece" : "white_piece"}
        // {...props}
      >
        <meshLambertMaterial
          reflectivity={10}
          color={props.color === BLACK ? controls().black : controls().white}
        />
      </PieceModel>
    </group>
  );
}

type PieceType = keyof GLTFResult["nodes"];

export function PieceModel(
  props: JSX.IntrinsicElements["group"] & {
    piece: PieceType;
    material?: keyof GLTFResult["materials"];
  }
) {
  const group = useRef<THREE.Group>();
  const [data] = useGLTF("/low_poly_chess_set/pieces.glb");

  return (
    <group ref={(el) => (group.current = el)} {...props} dispose={null}>
      <group name="Scene">
        <Suspense fallback={null}>
          <mesh
            {...props}
            name={props.piece}
            castShadow
            receiveShadow
            geometry={data()?.nodes[props.piece].geometry}
            {...(props.material
              ? { material: data()?.materials[props.material] }
              : {})}
            userData={{ name: props.piece }}
          >
            {props.children}
          </mesh>
        </Suspense>
      </group>
    </group>
  );
}

// useGLTF.preload("/low_poly_chess_set/pieces.glb");