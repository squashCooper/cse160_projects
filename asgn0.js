//Draw recatangle 
let ctx; 

function drawVector(v, color) {
    let rectX = 0; 
    let rectY = 0; 
    let rectWidth = 400;
    let rectHeight = 400;
    let scaleFactor = 20;

    // Start from the center of the rectangle
    ctx.beginPath();
    ctx.moveTo(rectX + rectWidth / 2, rectY + rectHeight / 2);
    ctx.lineTo(
        rectX + rectWidth / 2 + v.elements[0] * scaleFactor, // x-component remains the same
        rectY + rectHeight / 2 - v.elements[1] * scaleFactor // y-component is inverted
    );
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
}
function handleDrawEvent(){
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a blue color
    ctx.fillRect(0,0, 400,400);
    let input_x1 = document.getElementById("x_num");
    let input_y1 = document.getElementById("y_num");
    let value_x1 = input_x1.value;
    let value_y1 = input_y1.value;
    let input_x2 = document.getElementById("x_num2");
    let input_y2 = document.getElementById("y_num2");
    let value_x2 = input_x2.value;
    let value_y2 = input_y2.value;

    v1 = new Vector3([value_x1,value_y1,0]);
    v2 = new Vector3([value_x2,value_y2,0]);
    drawVector(v1, "red");
    drawVector(v2, "blue");

}
function handleDrawOperationEvent(){
    
    const selectedOperation = document.getElementById('ops').value;
    const scalarValue = document.getElementById('scalar1').value;

    console.log('Selected operation:', selectedOperation); // This will show add, subtract, multiply, or divide
    let input_x1 = document.getElementById("x_num");
    let input_y1 = document.getElementById("y_num");
    let value_x1 = input_x1.value;
    let value_y1 = input_y1.value;
    let input_x2 = document.getElementById("x_num2");
    let input_y2 = document.getElementById("y_num2");
    let value_x2 = input_x2.value;
    let value_y2 = input_y2.value;

    v1 = new Vector3([value_x1,value_y1,0]);
    v2 = new Vector3([value_x2,value_y2,0]);
    dot_product = new Vector3([0,0,0]);
    cross_prod = 0; 

    switch(selectedOperation) {
        case 'add':
            v1 = v1.add(v2);
            drawVector(v1, "green");
            break;
        case 'subtract':
            v1 = v1.sub(v2);
            drawVector(v1, "green");
            break;
        case 'multiply':
            v3 = v1.mul(scalarValue);
            v4 = v2.mul(scalarValue);
            drawVector(v3, "green");
            drawVector(v4, "green");
            break;
        case 'divide':
            v3 = v1.div(scalarValue);
            v4 = v2.div(scalarValue);
            drawVector(v3, "green");
            drawVector(v4, "aquamarine");
            break;
        case'magnitude':
            v1_mag = v1.magnitude();
            v2_mag = v2.magnitude();
            console.log("Magnitude of v1:", v1_mag);
            console.log("Magnitude of v2:", v2_mag);
        case 'normalize': 

            v1_norm = v1.normalize();
            v2_norm = v2.normalize();
            console.log("v1 normalized:", v1_norm);
            console.log("v2 normalized:", v2_norm);
        case 'angle':
             //angle = dot/mag 1 * mag 2 

             
             dot_product = Vector3.dot(v1, v2);
             mag1 = v1.magnitude();
             mag2 = v2.magnitude();
             angle = dot_product / (mag1 * mag2);
             cos_calc = Math.acos(angle);
             actual_angle = cos_calc * (180 / Math.PI);
             console.log("Angle between:", actual_angle);
        
        case 'area':

            cross_prod = Vector3.cross(v2,v1);
            area = 0.5 * cross_prod;
            console.log("Area:", area);


    }
}


function main(){

    var canvas = document.getElementById('example');
    if(!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
        }
        // Get the rendering context for 2DCG
        ctx = canvas.getContext('2d');

        // Draw a blue rectangle

ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a blue color
ctx.fillRect(0,0, 400,400); // Fill a rectangle with the color
v1 = new Vector3([2.25, 2.25,0]);
drawVector(v1, "red");
}

main();