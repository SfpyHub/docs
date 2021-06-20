import React, { useMemo, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import {
  Vector3,
  Group,
  BufferGeometry
} from "three";
import { mapPoint } from './utils'

function Line({ points, opacity, color }: any) {
	//const positions = useMemo(() => new Float32Array([...points]), [points])
	const lineGeometry = new BufferGeometry().setFromPoints(points)
	return (
		<line geometry={lineGeometry}>
			<lineBasicMaterial 
				color={color}
				linewidth={2}
				opacity={opacity}
				transparent
			/>
		</line>
	)
}

export function IntroLines({ count, altitude, color }: {
	count: number
	altitude: number
	color: string
}) {
	const group = useRef<Group>()
	
	let opacity = 1
	let lines = []
	for (var i = 0; i < count; ++i) {
		let lat = Math.random() * 180 + 90
		let long = Math.random() * 5
		let len = 4 + Math.floor(Math.random() * 5)

		if (Math.random() < .3) {
			long = Math.random() * 30 - 50
			len = 3 + Math.floor(Math.random() * 3)
		}

		let points = []
		for (var j = 0; j < len; ++j) {
			const point = mapPoint(lat, long - j * 5)
			const sPoint = new Vector3(
				point.x * altitude,
				point.y * altitude,
				point.z * altitude
			)
			points = [...points, sPoint]
		}

		lines = [...lines, points]
	}

	useFrame(({ clock }) => {
		const delta = clock.getDelta()
		const renderTime = clock.getElapsedTime()
		
		if (2 > renderTime) {
			if (renderTime/2 < .1) {
				opacity = (renderTime/2) * (1 / .1) - .2;
			} else if (renderTime/2 > .8) {
				opacity = Math.max(1 - (renderTime/2), 0) * (1 / .2)
			} else {
				opacity = 1
			}
			group.current?.rotateY((2700 * delta * Math.PI))
			// group.current?.rotateY(((450) * Math.PI)/(2/delta))
			group.current.children.forEach(child => child.material.opacity = opacity)
		} else {
			group?.current?.clear()
		}
	})

	return (
		<group ref={group}>
			{lines.map((line, i) => (
				<Line key={i} color={color} opacity={opacity} points={line} />
			))}
		</group>
	)
}

