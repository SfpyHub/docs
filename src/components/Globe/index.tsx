import React, { useState, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Camera } from './camera'
import { IntroLines } from './IntroLines'
import { Particles } from './particles'

export function App({ primaryColor }) {
  return (
    <Canvas
      camera={{
        position:[0,0,1700],
        fov:50,
        aspect:1,
        near:1,
        far:2000,
      }}
    > 
      
      {/*<IntroLines color={primaryColor} count={60} altitude={1.10} />*/}
      <Particles
        baseColor={primaryColor}
        duration={2}
        altitude={1.10}
        cameraDistance={1700}
      />
      
      <Camera />
    </Canvas>
  )
}