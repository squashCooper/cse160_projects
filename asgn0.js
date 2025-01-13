//draw recatangle 
let ctx; 

function drawVector(v, color) {
    let rectX = 0; 
    let rectY = 0; 
    let rectWidth = 400;
    let rectHeight = 400;
    let scaleFactor = 20;

    // start from the center of the rectangle
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
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // set a blue color
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

function clearAndRedrawBase() {
    //handling error of green line staying when user picks different 
    //operation 
    ctx.clearRect(0, 0, example.width, example.height);
    
    //black background
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, 400, 400);
    
    //original vectors
    let input_x1 = document.getElementById("x_num").value;
    let input_y1 = document.getElementById("y_num").value;
    let input_x2 = document.getElementById("x_num2").value;
    let input_y2 = document.getElementById("y_num2").value;
    
    let v1 = new Vector3([input_x1, input_y1, 0]);
    let v2 = new Vector3([input_x2, input_y2, 0]);
    
    drawVector(v1, "red");
    drawVector(v2, "blue");
    
    return [v1, v2];
}

function handleDrawOperationEvent() {
    const selectedOperation = document.getElementById('ops').value;
    const scalarValue = document.getElementById('scalar1').value;
    
    // redraw red and blue lines
    const [v1, v2] = clearAndRedrawBase();
    
    switch(selectedOperation) {

        case 'add':
            const sum = v1.add(v2);
            drawVector(sum, "green");
            break;

        case 'subtract':
            const diff = v1.sub(v2);
            drawVector(diff, "green");
            break;

        case 'multiply':
            const v3 = v1.mul(scalarValue);
            const v4 = v2.mul(scalarValue);
            drawVector(v3, "green");
            drawVector(v4, "green");
            break;
        
        case 'divide':
            const v3Div = v1.div(scalarValue);
            const v4Div = v2.div(scalarValue);
            drawVector(v3Div, "green");
            drawVector(v4Div, "aquamarine");
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
        // get the rendering context for 2DCG
        ctx = canvas.getContext('2d');

        // draw a blue rectangle

ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // set a blue color
ctx.fillRect(0,0, 400,400); // fill a rectangle with the color
v1 = new Vector3([2.25, 2.25,0]);
drawVector(v1, "red");
}

main();
