export const shaders = {
	point: {
		vertexShader: function (duration: number, altitude: number): string {
			return `
				#define PI 3.141592653589793238462643
		    #define DISTANCE 500.0
		    #define INTRODURATION ${duration + .00001}
		    #define INTROALTITUDE ${altitude + .00001}
		    attribute float lng;
		    uniform float currentTime;
		    varying vec4 vColor;
		    
		    void main()
		    {
		       vec3 newPos = position;
		       float opacityVal = 0.0;
		       float introStart = INTRODURATION * ((180.0 + lng)/360.0);
		       if(currentTime > introStart){
		          opacityVal = 1.0;
		       }
		       if(currentTime > introStart && currentTime < introStart + INTRODURATION / 8.0){
		          newPos = position * INTROALTITUDE;
		          opacityVal = .3;
		       }
		       if(currentTime > introStart + INTRODURATION / 8.0 && currentTime < introStart + INTRODURATION / 8.0 + 200.0){
		          newPos = position * (1.0 + ((INTROALTITUDE-1.0) * (1.0-(currentTime - introStart-(INTRODURATION/8.0))/200.0)));
		       }
		       vColor = vec4( color, opacityVal ); //     set color associated to vertex; use later in fragment shader.
		       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
		    }
			`
		},

		fragmentShader: function (cameraDistance: number): string {
			return `
				varying vec4 vColor;
		    void main()
		    {
		       gl_FragColor = vColor;
		       float depth = gl_FragCoord.z / gl_FragCoord.w;
		       float fogFactor = smoothstep(${cameraDistance}.0, + ${cameraDistance + 300}.0, depth );
		       vec3 fogColor = vec3(0.0);
		       gl_FragColor = mix( vColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
		    }
			`
		}
	}
}