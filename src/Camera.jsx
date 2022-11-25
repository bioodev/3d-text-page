import React, { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Camera(props) {
  const camera = useRef();
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.1;
    }
  });

  return (
    <group ref={group} {...props}>
      <PerspectiveCamera
        name="CustomCamera"
        ref={camera}
        makeDefault
        position={[0, 0, 50]}
      />
      {props.children}
    </group>
  );
}
