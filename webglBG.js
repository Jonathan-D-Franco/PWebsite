// Vertex shader code
var vertexShaderCode = `attribute vec2 a_position;
void main() {
    gl_Position = vec4(a_position, 0, 1);
}`;

// Fragment shader code
var fragmentShaderCode = `precision mediump float;

uniform vec2 iResolution;
uniform float iTime;

vec3 palette(float t) {
    vec3 a = vec3(0.2, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 0.7, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*sin(6.28318 * (c * t + d));
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for(float i = 0.0; i < 3.0; i++) {
        uv = fract(uv * .5) *.1- 0.05;
        float d = length(uv) / exp(-length(uv0));
        vec3 col = palette(length(uv0) + i * 3. + iTime * 0.4);

        d = tan(d * 8. + iTime*.5) / 8.;
        d = abs(d);
        d = exp(-d * pow(55., 2.5 - i * 0.5));

        finalColor += col * d;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}`;

var canvas = document.getElementById("glCanvas");
var gl = canvas.getContext("webgl");

// Compile shaders
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderCode);
gl.compileShader(vertexShader);

var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderCode);
gl.compileShader(fragmentShader);

// Create program
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);

// Set up the resolution
var resolutionUniformLocation = gl.getUniformLocation(program, "iResolution");
gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

// Create a buffer for the positions
var positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
    1, -1,
    -1, 1,
    1, 1
]), gl.STATIC_DRAW);

// Set up the position attribute
var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
gl.enableVertexAttribArray(positionAttributeLocation);
gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

// Animation loop
var startTime = Date.now();
var timeUniformLocation = gl.getUniformLocation(program, "iTime");

function render() {
    var currentTime = (Date.now() - startTime) * 0.001;
    gl.uniform1f(timeUniformLocation, currentTime);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(render);
}

render();

