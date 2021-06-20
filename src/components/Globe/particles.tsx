import React, { useEffect, useMemo, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { BufferAttribute, BufferGeometry, Mesh, ShaderMaterial, Color, VertexColors, DoubleSide } from 'three'
import pusherColor from 'pusher.color';
import { shaders } from './shaders'
import { grid } from './grid'
import { addTriangle } from './utils'

export function Particles({ baseColor, duration, altitude, cameraDistance }) {
	const mesh = useRef<Mesh>()

	const vertexShader = useMemo(() => shaders.point.vertexShader(duration, altitude), [shaders, duration, altitude])
	const fragmentShader = useMemo(() => shaders.point.fragmentShader(cameraDistance), [shaders, cameraDistance])

	const triangles = useMemo(() => grid.tiles.length * 4, [])

	const colors = useMemo(() => {
		const baseColors = pusherColor(baseColor).hueSet()
		return baseColors.map(color => {
			return color.shade(Math.random()/3.0)
		})
	}, [baseColor])

	const position = new Float32Array(triangles * 9)
	const normal = new Float32Array(triangles * 9)
	const color = new Float32Array(triangles * 9)
	const long = new Float32Array(triangles * 3)

	const chunkSize = 21845
	const index = useMemo((): Uint16Array => {
		const idx = new Uint16Array(triangles * 3)
		for ( let i = 0; i < idx.length; i ++ ) {
      idx[i] = i % ( 3 * chunkSize )
    }
    return idx
	}, [triangles, chunkSize])

	const groups = useMemo(() => {
		const groups = []
		const offsets = triangles / chunkSize
		for ( let i = 0; i < offsets; i ++ ) {
      const offset = {
          start: i * chunkSize * 3,
          index: i * chunkSize * 3,
          count: Math.min( triangles - ( i * chunkSize ), chunkSize ) * 3
      };

      groups.push(offset);
    }
    return groups
	}, [triangles, chunkSize])

	for (let i =0; i < grid.tiles.length; i++){
    var t = grid.tiles[i];
    var k = i * 4;

    var colorIndex = Math.floor(Math.random() * colors.length);
    var colorRGB = colors[colorIndex].rgb();
    var c = new Color();

    c.setRGB(colorRGB[0]/255.0, colorRGB[1]/255.0, colorRGB[2]/255.0);

    addTriangle(k, t.b[0].x, t.b[0].y, t.b[0].z, t.b[1].x, t.b[1].y, t.b[1].z, t.b[2].x, t.b[2].y, t.b[2].z, t.lat, t.lon, c, long, position, color);
    addTriangle(k+1, t.b[0].x, t.b[0].y, t.b[0].z, t.b[2].x, t.b[2].y, t.b[2].z, t.b[3].x, t.b[3].y, t.b[3].z, t.lat, t.lon, c, long, position, color);
    addTriangle(k+2, t.b[0].x, t.b[0].y, t.b[0].z, t.b[3].x, t.b[3].y, t.b[3].z, t.b[4].x, t.b[4].y, t.b[4].z, t.lat, t.lon, c, long, position, color);

    if(t.b.length > 5){ // for the occasional pentagon that i have to deal with
      addTriangle(k+3, t.b[0].x, t.b[0].y, t.b[0].z, t.b[5].x, t.b[5].y, t.b[5].z, t.b[4].x, t.b[4].y, t.b[4].z, t.lat, t.lon, c, long, position, color);
    }
  }

  useFrame(({ clock }) => {
    mesh.current.material.uniforms.currentTime.value = clock.getElapsedTime()
  });

	useEffect(() => {
		mesh.current.geometry.addGroup(groups)
		mesh.current.geometry.computeBoundingSphere()
	}, [])

	return (
		<mesh ref={mesh}>
			<bufferGeometry args={[20, 320, 320]} attach="geometry">
				<bufferAttribute
          attachObject={['attributes', 'index']}
          count={index.length / 1}
          array={index}
          itemSize={1}
        />
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={position.length / 3}
          array={position}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'normal']}
          count={normal.length / 3}
          array={normal}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'color']}
          count={color.length / 3}
          array={color}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'lng']}
          count={long.length / 1}
          array={long}
          itemSize={1}
        />
			</bufferGeometry>
			<shaderMaterial
				attach="material"
				uniforms={{ 
		    	currentTime: { 
		    		type: 'f', 
		    		value: 0.0
		    	}
	    	}}
		    vertexShader={vertexShader}
		    fragmentShader={fragmentShader}
		    vertexColors={VertexColors}
		    side={DoubleSide}
			/>
		</mesh>
	)
	
	
}