
export const mapPoint = (lat: number, long: number, scale?: number): { x: number, y: number, z: number } => {
	if (!scale) {
		scale = 500;
	}

	const phi = (90 - lat) * Math.PI / 180
	const theta = (180 - long) * Math.PI / 180
	const x = scale * Math.sin(phi) * Math.cos(theta)
	const y = scale * Math.cos(phi)
	const z = scale * Math.sin(phi) * Math.sin(theta)

	return {x, y, z}
}

export const addTriangle = (k, ax, ay, az, bx, by, bz, cx, cy, cz, lat, lng, color, long, positions, colors) => {
  const p = k * 3;
  const i = p * 3;
  // var colorIndex = Math.floor(Math.random()*myColors.length);
  // var colorRGB = myColors[colorIndex].rgb();

  long[p] = lng;
  long[p+1] = lng;
  long[p+2] = lng;

  positions[ i ]     = ax;
  positions[ i + 1 ] = ay;
  positions[ i + 2 ] = az;

  positions[ i + 3 ] = bx;
  positions[ i + 4 ] = by;
  positions[ i + 5 ] = bz;

  positions[ i + 6 ] = cx;
  positions[ i + 7 ] = cy;
  positions[ i + 8 ] = cz;

  colors[ i ]     = color.r;
  colors[ i + 1 ] = color.g;
  colors[ i + 2 ] = color.b;

  colors[ i + 3 ] = color.r;
  colors[ i + 4 ] = color.g;
  colors[ i + 5 ] = color.b;

  colors[ i + 6 ] = color.r;
  colors[ i + 7 ] = color.g;
  colors[ i + 8 ] = color.b;
};