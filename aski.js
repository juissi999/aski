// Aski is an ascii javascript game-engine utilising html-tables.

function drawPoint(canvas, x, y, marker){
   // Draws a single point in the canvas. Checks that the point
   // is inside canvas.
   if (y < canvas.length && -1 < y) {
      if (x < canvas[y].length && -1 < x) {
         canvas[y][x] = marker;
      }
   }
   return canvas;
}

function generateCanvas(size, filler){
   // Create canvas with wanted size and initialization filler value.
   var canvas = [];
   for (var i = 0; i<size;i++) {
      canvas.push(Array(size).fill(filler));
   }
   return canvas;
}

function drawCanvasWithColors(colormatrix){
   // Processes the imagematrix so that it can be drawn.
   // Returns string that can be passed to html.
   printstr = "<table>";
   for (var i = 0; i < colormatrix.length; i++) {
      printstr += "<tr>"
      printstr += "<td style=\"background-color:" + colormatrix[i].join("\"></td><td style=\"background-color:") + "\"></td>"
      printstr += "</tr>";
   }
   printstr += "</table>"
   return printstr;
}