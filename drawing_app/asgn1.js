// ColoredPoint.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE =`
  attribute vec4 a_Position;
  uniform float u_Size; 
  void main() {
   gl_Position = a_Position;
   gl_PointSize = u_Size; 
  }`

// Fragment shader program
var FSHADER_SOURCE =`
  precision mediump float;
  uniform vec4 u_FragColor;
  void main() {
   gl_FragColor = u_FragColor;
}`
let canvas;
let gl;
let a_Position;
let u_FragColor;
let u_Size;


function setupWebGL(){
  canvas = document.getElementById('webgl');
  

  // Get the rendering context for WebGL
  gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  //citation: https://threejs.org/examples/?q=multiple#webgl_multiple_elements used this for help with viewports 
  const canvasWidth = canvas.width;

  const canvasHeight = canvas.height;

  const leftViewportWidth = canvasWidth / 2;


  gl.viewport(0, 0, leftViewportWidth, canvasHeight); 
  gl.enable(gl.SCISSOR_TEST);
  gl.scissor(0, 0, leftViewportWidth, canvasHeight);
  
}

function connectVariablesToGLSL(){

   // Initialize shaders
   if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  // Get the storage location of u_FragColor
  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }

  u_Size = gl.getUniformLocation(gl.program, 'u_Size');
  if(!u_Size){
    console.log("Failed to load storage loc of u_Size");
    return;
  }

}

function drawWalter() {

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const leftViewportWidth = canvasWidth / 2;

  // Set up the right viewport
  gl.viewport(leftViewportWidth, 0, leftViewportWidth, canvasHeight);
  gl.scissor(leftViewportWidth, 0, leftViewportWidth, canvasHeight);
  gl.enable(gl.SCISSOR_TEST);
  gl.clearColor(1.0, 1.0, 1.0, 1.0); // White background for right viewport
  gl.clear(gl.COLOR_BUFFER_BIT);


  // Create and render predefined triangles
  const triangles = [
    new Triangle(),
    new Triangle(),
    new Triangle(),
    new Triangle(),
    new Triangle(),
    new Triangle(),
    
   
   // new Triangle(),
   // new Triangle()
  ];

  const circles = [

    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle(),
    new Circle()

    
      
  ];

  const rectangles = [
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle(),
    new Rectangle()
 //   new Rectangle()
   // new Rectangle(),
 
    
  ];

  // Customize triangles
  // triangles[0].position = [0.0, 0.25];
  // triangles[0].color = [0.5, 0.5, 0.5, 1.0]; 
  // triangles[0].size = 40.0;
  // triangles[0].rotation = 45;


  //ears
  triangles[0].position = [-0.6, 0.56];
  triangles[0].color = [0.5, 0.5, 0.5, 1.0];
  triangles[0].size = 55.0;
  triangles[0].rotation = 0;


  triangles[1].position = [0.177, 0.56];
  triangles[1].color = [0.5, 0.5, 0.5, 1.0]; 
  triangles[1].size = 55.0;
  triangles[1].rotation = 90;
  
  //face
  triangles[2].position = [0.05, 0.0];
  triangles[2].color = [0.5, 0.5, 0.5, 1.0]; 
  triangles[2].size = 80.0;
  triangles[2].rotation = 270;

    
    triangles[3].position = [-0.6, 0.0];
  triangles[3].color = [0.5, 0.5, 0.5, 1.0]; 
  triangles[3].size = 80.0;
  triangles[3].rotation = 180;


  //shoulders 
  triangles[4].position = [-0.5, -0.1];
  triangles[4].color = [0.5, 0.5, 0.5, 1.0]; 
  triangles[4].size = 95.0;
  triangles[4].rotation = 90;


  triangles[5].position = [-0.17, -0.1];
  triangles[5].color = [0.5, 0.5, 0.5, 1.0]; 
  triangles[5].size = 95.0;
  triangles[5].rotation = 0;








  //table outline
  rectangles[0].position = [0.1, -0.5];
   rectangles[0].color = [0.0, 0.0, 0.0, 1.0]; 
   rectangles[0].width = 1.65;
   rectangles[0].height = 0.55;

//   //table
  rectangles[1].position = [0.1, -0.5];
   rectangles[1].color = [0.8, 0.5, 0.3, 1.0]; 
   rectangles[1].width = 1.6;
   rectangles[1].height = 0.5;




     //tail
     rectangles[2].position = [0.3,-0.5];
     rectangles[2].color = [0.5,0.5,0.5,1.0];
     rectangles[2].width = 0.9;
     rectangles[2].height = 0.08;


     //tail stripes 

     rectangles[3].position = [0.4,-0.5];
     rectangles[3].color = [0.2, 0.2, 0.2 ,1.0];
     rectangles[3].width = 0.03;
     rectangles[3].height = 0.08;

     rectangles[4].position = [0.5,-0.5];
     rectangles[4].color = [0.2, 0.2, 0.2 ,1.0];
     rectangles[4].width = 0.03;
     rectangles[4].height = 0.08;

     rectangles[5].position = [0.6,-0.5];
     rectangles[5].color = [0.2, 0.2, 0.2 ,1.0];
     rectangles[5].width = 0.03;
     rectangles[5].height = 0.08;

     



//   //body 
   rectangles[6].position = [-0.1, 0.3];
   rectangles[6].color = [0.5, 0.5, 0.5, 1.0]; 
   rectangles[6].width = 0.4;
   rectangles[6].height = 0.3;



   rectangles[7].position = [-0.1, -0.3];
    rectangles[7].color = [0.5, 0.5, 0.5, 1.0]; 
    rectangles[7].width = 0.8;
    rectangles[7].height = 0.4;


  
//   //paws
  //  rectangles[5].position = [-0.3, -0.5];
  //  rectangles[5].color = [0.4, 0.4, 0.4, 1.0]; 
  // rectangles[5].width = 0.4;
  //  rectangles[5].height = 0.1;

   rectangles[8].position = [-0.3, -0.5];
   rectangles[8].color = [0.4, 0.4, 0.4, 1.0]; 
   rectangles[8].width = 0.4;
   rectangles[8].height = 0.1;

   rectangles[9].position = [0.1, -0.5];
   rectangles[9].color = [0.4, 0.4, 0.4, 1.0]; 
   rectangles[9].width = 0.4;
   rectangles[9].height = 0.1;


//   //top of head
  rectangles[10].position = [-0.075, 0.5];
   rectangles[10].color = [0.5, 0.5, 0.5, 1.0]; 
   rectangles[10].width = 1.0525;
   rectangles[10].height = 0.2;

   //   //nose 
   rectangles[11].position = [-0.09, 0.25];
   rectangles[11].color = [1.0, 0.4, 0.0, 1.0]; 
   rectangles[11].width = 0.03;
   rectangles[11].height = 0.07;

   rectangles[12].position = [-0.09, 0.27];
   rectangles[12].color = [1.0, 0.4, 0.0, 1.0]; 
   rectangles[12].width = 0.07;
   rectangles[12].height = 0.03;


  



//   //eye shadow
   circles[0].position = [0.1, 0.4, 0.0];
   circles[0].color = [0.0, 0.0, 0.0, 1.0];
  circles[0].size = 21.0;
   circles[0].segments = 20;

  circles[1].position = [-0.3, 0.4, 0.0];
  circles[1].color = [0.0, 0.0, 0.0, 1.0];
  circles[1].size = 21.0;
  circles[1].segments = 20


  //eyes
  circles[2].position = [0.1, 0.4, 0.0];
  circles[2].color = [0.0, 0.6, 0.4, 1.0];
  circles[2].size = 20.0;
  circles[2].segments = 20;

  circles[3].position = [-0.3, 0.4, 0.0];
  circles[3].color = [0.0, 0.6, 0.4, 1.0];
  circles[3].size = 20.0;
  circles[3].segments = 20;


//mouth lines

circles[4].position = [-0.12, 0.15, 0.0];
circles[4].color = [0.2, 0.2, 0.2, 1.0];
circles[4].size = 14.0;
circles[4].segments = 20;

circles[5].position = [-0.06, 0.15, 0.0];
circles[5].color = [0.2, 0.2, 0.2, 1.0];
circles[5].size = 14.0;
circles[5].segments = 20;


  //mouth
  circles[6].position = [-0.12, 0.15, 0.0];
  circles[6].color = [0.5, 0.5, 0.5, 1.0];
  circles[6].size = 13.5;
  circles[6].segments = 20;

  circles[7].position = [-0.06, 0.15, 0.0];
  circles[7].color = [0.5, 0.5, 0.5, 1.0];
  circles[7].size = 13.5;
  circles[7].segments = 20;


  circles[8].position = [-0.12, 0.17, 0.0];
  circles[8].color = [0.5, 0.5, 0.5, 1.0];
  circles[8].size = 13.0;
  circles[8].segments = 20;

  circles[9].position = [-0.06, 0.17, 0.0];
  circles[9].color = [0.5, 0.5, 0.5, 1.0];
  circles[9].size = 13.0;
  circles[9].segments = 20;

  //pupils 

  circles[10].position = [-0.1, -0.5, 0.0];
  circles[10].color = [0.6, 0.6, 0.6, 1.0];
  circles[10].size = 5.0;
  circles[10].segments = 10;

  circles[11].position = [-0.1, -0.47, 0.0];
  circles[11].color = [0.6, 0.6, 0.6, 1.0];
  circles[11].size = 5.0;
  circles[11].segments = 10;

  circles[12].position = [-0.1, -0.53, 0.0];
  circles[12].color = [0.6, 0.6, 0.6, 1.0];
  circles[12].size = 5.0;
  circles[12].segments = 10;

  circles[13].position = [-0.3, 0.4, 0.0];
  circles[13].color = [0.0, 0.0, 0.0, 1.0];
  circles[13].size = 7.0;
  circles[13].segments = 30;

  circles[14].position = [-0.3, 0.35, 0.0];
  circles[14].color = [0.0, 0.0, 0.0, 1.0];
  circles[14].size = 7.0;
  circles[14].segments = 30;

  circles[15].position = [-0.3, 0.45, 0.0];
  circles[15].color = [0.0, 0.0, 0.0, 1.0];
  circles[15].size = 7.0;
  circles[15].segments = 30;

  circles[16].position = [-0.3, 0.46, 0.0];
  circles[16].color = [0.0, 0.0, 0.0, 1.0];
  circles[16].size = 7.0;
  circles[16].segments = 30;

  circles[17].position = [-0.3, 0.34, 0.0];
  circles[17].color = [0.0, 0.0, 0.0, 1.0];
  circles[17].size = 7.0;
  circles[17].segments = 30;

  circles[18].position = [-0.3, 0.335, 0.0];
  circles[18].color = [0.0, 0.0, 0.0, 1.0];
  circles[18].size = 7.0;
  circles[18].segments = 30;

  circles[19].position = [-0.3, 0.359, 0.0];
  circles[19].color = [0.0, 0.0, 0.0, 1.0];
  circles[19].size = 7.0;
  circles[19].segments = 30;

  circles[20].position = [-0.3, 0.371, 0.0];
  circles[20].color = [0.0, 0.0, 0.0, 1.0];
  circles[20].size = 7.0;
  circles[20].segments = 30;

  circles[21].position = [-0.3, 0.381, 0.0];
  circles[21].color = [0.0, 0.0, 0.0, 1.0];
  circles[21].size = 7.0;
  circles[21].segments = 30;

  circles[22].position = [-0.3, 0.42, 0.0];
  circles[22].color = [0.0, 0.0, 0.0, 1.0];
  circles[22].size = 7.0;
  circles[22].segments = 30;


  circles[23].position = [0.1, 0.4, 0.0];
  circles[23].color = [0.0, 0.0, 0.0, 1.0];
  circles[23].size = 7.0;
  circles[23].segments = 30;

  circles[24].position = [0.1, 0.35, 0.0];
  circles[24].color = [0.0, 0.0, 0.0, 1.0];
  circles[24].size = 7.0;
  circles[24].segments = 30;

  circles[25].position = [0.1, 0.45, 0.0];
  circles[25].color = [0.0, 0.0, 0.0, 1.0];
  circles[25].size = 7.0;
  circles[25].segments = 30;

  circles[26].position = [0.1, 0.46, 0.0];
  circles[26].color = [0.0, 0.0, 0.0, 1.0];
  circles[26].size = 7.0;
  circles[26].segments = 30;

  circles[27].position = [0.1, 0.34, 0.0];
  circles[27].color = [0.0, 0.0, 0.0, 1.0];
  circles[27].size = 7.0;
  circles[27].segments = 30;

  circles[28].position = [0.1, 0.335, 0.0];
  circles[28].color = [0.0, 0.0, 0.0, 1.0];
  circles[28].size = 7.0;
  circles[28].segments = 30;

  circles[29].position = [0.1, 0.359, 0.0];
  circles[29].color = [0.0, 0.0, 0.0, 1.0];
  circles[29].size = 7.0;
  circles[29].segments = 30;

  circles[30].position = [0.1, 0.371, 0.0];
  circles[30].color = [0.0, 0.0, 0.0, 1.0];
  circles[30].size = 7.0;
  circles[30].segments = 30;

  circles[31].position = [0.1, 0.381, 0.0];
  circles[31].color = [0.0, 0.0, 0.0, 1.0];
  circles[31].size = 7.0;
  circles[31].segments = 30;

  circles[32].position = [0.1, 0.42, 0.0];
  circles[32].color = [0.0, 0.0, 0.0, 1.0];
  circles[32].size = 7.0;
  circles[32].segments = 30;

  circles[33].position = [0.1, 0.47, 0.0];
  circles[33].color = [0.0, 0.0, 0.0, 1.0];
  circles[33].size = 7.0;
  circles[33].segments = 30;


  circles[34].position = [-0.3, 0.47, 0.0];
  circles[34].color = [0.0, 0.0, 0.0, 1.0];
  circles[34].size = 7.0;
  circles[34].segments = 30;

  
   // Render each triangle
  for (let triangle of triangles) {
    triangle.render();
  }

  
   for(let rectangle of rectangles){
     rectangle.render();
   }

 

  for(let circle of circles){
     circle.render();
  }

  
}







var g_shapesList = [];
//var g_points = [];  // The array for the position of a mouse press
//var g_colors = [];  // The array to store the color of a point
//var g_size = [];
function click(ev) {
 
  let [x,y] = conversion(ev);

  let point; 
  if(g_selectedType == POINT){
    point = new Point();
  }else if(g_selectedType == TRIANGLE){
    point = new Triangle();
  }
  else if(g_selectedType == RECTANGLE){
    point = new Rectangle();
  }
  else{
    point = new Circle();
  }
 
  point.position = [x,y];
  point.color = g_selectedColor.slice();
  point.size = g_selected_size;
  point.segments = g_selectedSeg;
  g_shapesList.push(point);
  // Store the coordinates to g_points array
 // g_points.push([x, y]);
//  g_colors.push(g_selectedColor.slice());
 // g_size.push(g_selected_size);
  // Store the coordinates to g_points array
 // if (x >= 0.0 && y >= 0.0) {      // First quadrant
   // g_colors.push([1.0, 0.0, 0.0, 1.0]);  // Red
 // } else if (x < 0.0 && y < 0.0) { // Third quadrant
 //   g_colors.push([0.0, 1.0, 0.0, 1.0]);  // Green
 // } else {                         // Others
 //   g_colors.push([1.0, 1.0, 1.0, 1.0]);  // White
 // }

  // Clear <canvas>
  
  renderAllShapes();
}

function conversion(ev){
  var x = ev.clientX; // x coordinate of a mouse pointer
  var y = ev.clientY; // y coordinate of a mouse pointer
  var rect = ev.target.getBoundingClientRect();

  const leftViewportWidth = canvas.width/2;

  //now need to adjust for splitting the canvas in half

  //if(x - rect.left > leftViewportWidth){
 //   return[2,2];
 // }
  x = ((x - rect.left) - leftViewportWidth/2)/(leftViewportWidth/2);
  y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

  return[x,y];
}

function renderAllShapes() {
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const leftViewportWidth = canvasWidth / 2;


  //view port stuff to split screen 
  gl.viewport(0, 0, leftViewportWidth, canvasHeight);
  gl.scissor(0, 0, leftViewportWidth, canvasHeight);
  gl.enable(gl.SCISSOR_TEST);
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // black background for left viewport
  gl.clear(gl.COLOR_BUFFER_BIT);

  // shapes in the left viewport
  for (let shape of g_shapesList) {
    shape.render();
  }
}

const POINT = 0;
const TRIANGLE = 1; 
const CIRCLE = 2;
const RECTANGLE = 3; 
let g_selectedColor = [0.0,0.0,0.0,1.0];
let g_selected_size = 5;
let g_selectedSeg = 10; 
let g_selectedType = POINT;
function userInterface(){

  document.getElementById("red_slide").addEventListener('mouseup', function() {g_selectedColor[0] = this.value/100});
  document.getElementById("green_slide").addEventListener('mouseup', function(){g_selectedColor[1] = this.value/100});
  document.getElementById("blue_slide").addEventListener('mouseup', function() {g_selectedColor[2] = this.value/100});

  document.getElementById("clear_canvas").onclick = function(){g_shapesList = []; renderAllShapes();};
  document.getElementById("square").onclick = function(){g_selectedType = POINT};
  document.getElementById("triangle").onclick = function(){g_selectedType = TRIANGLE};
  document.getElementById("circle").onclick = function(){g_selectedType = CIRCLE};
  document.getElementById("rectangle").onclick = function(){g_selectedType = RECTANGLE};


  document.getElementById("size_slide").addEventListener('mouseup', function(){g_selected_size = this.value;});
  document.getElementById("circle_slide").addEventListener('mouseup', function(){g_selectedSeg = this.value;});

  document.getElementById("walter_button").onclick = drawWalter;

}



function main() {
  // Initialize WebGL and shaders
  setupWebGL();
  connectVariablesToGLSL();
  userInterface();

 
  renderAllShapes(); 
  //drawWalter(); 

  // Set up event handlers
  canvas.onmousedown = click;
  canvas.onmousemove = function (ev) {
    if (ev.buttons === 1) {
      click(ev);
    }
  };
}

//function main() {
  // Retrieve <canvas> element
  
 // setupWebGL();
 // connectVariablesToGLSL();
 // userInterface();
  // // Get the storage location of a_Position
  //renderAllShapes(); // Left viewport is drawn first
 // drawWalter(); 

  // Register function (event handler) to be called on a mouse press
  //canvas.onmousedown = click;

  //canvas.onmousemove = function(ev){if(ev.buttons == 1){click(ev)}};

  // Specify the color for clearing <canvas>
  //gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  //gl.clear(gl.COLOR_BUFFER_BIT);
//}