import React, { useRef, useEffect, useMemo, useState } from "react";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export function Camera({ dayLength=2800, viewAngle=0.1, distance=1700 }) {
  const ref = useRef()
  const set = useThree(state => state.set)
  const {
    camera,
    gl: { domElement }
  } = useThree();

  const controls = useRef();
  let cameraAngle = Math.PI
  useFrame(({ camera, clock }) => {
    const renderTime = clock.getElapsedTime()
    const rotate = (Math.PI * 2)/(dayLength/renderTime)
    cameraAngle = cameraAngle + rotate
    // camera.position.x = distance * Math.cos(cameraAngle) * Math.cos(viewAngle)
    // camera.position.y = Math.sin(viewAngle) * distance;
    // camera.position.z = distance * Math.sin(cameraAngle) * Math.cos(viewAngle)
  	controls.current.update()
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
      enablePan={false}
      autoRotateSpeed={2}
    />
  );
}