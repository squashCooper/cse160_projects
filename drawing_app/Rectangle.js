class Rectangle {
    constructor() {

    //same as other constructors except w/ width and height
      this.type = 'rectangle';
      this.position = [0.0, 0.0]; 
      this.color = [1.0, 1.0, 1.0, 1.0]; 
      this.width = 0.2; 
      this.height = 0.1; 
    }
  
    render() {

      const xy = this.position;
      const rgba = this.color;
      const halfWidth = this.width / 2;
      const halfHeight = this.height / 2;
  
      //2 triangles
      const vertices = [
        xy[0] - halfWidth, xy[1] - halfHeight, 
        xy[0] + halfWidth, xy[1] - halfHeight, 
        xy[0] - halfWidth, xy[1] + halfHeight, 
  
        xy[0] - halfWidth, xy[1] + halfHeight, 
        xy[0] + halfWidth, xy[1] - halfHeight,
        xy[0] + halfWidth, xy[1] + halfHeight, 
      ];
  

      //same as other class
      
      gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
  
     
      const vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create buffer object');
        return;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
      gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(a_Position);
  
      //6 vertices -> 2 triangles
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
  }
  