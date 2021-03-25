let slider = document.getElementById("Slider");
let output = document.getElementById("Svalue");

//Sets output equal the value of the slider
output.innerHTML = slider.value;

//Updates slider value as it is moved
//Sets height and prints pyramid
slider.oninput = function() {
 getHeightAndDrawPyramid();
}

//Sets starting symbol
drop = document.getElementById("symbol");
brick = drop.value;

//Updates symbol as it changes
drop.onchange = function() {
  getHeightAndDrawPyramid();
}

//Makes pyramid show up when screen loads
printPyramid(slider.value);

//Function that will get the height and run printPyramid 
function getHeightAndDrawPyramid() {
  brick = drop.value;
  output.innerHTML = slider.value;
  height = slider.value;
  printPyramid(height);
}

//Building the pyramid
function printPyramid(height) {

// ==> Find and empty pyramid before starting
//Grabs pyramid ID from HTML
let element = document.getElementById("pyramid");
// ==> Empty `element` contents
element.innerHTML = '';

let numBricks = 0;
let numSpaces = 0;

  for (let row = 0; row < height; row++) {
    let layer = "";

  //figure out number of bricks and spaces
    numBricks = row + 2;
    numSpaces = height - row - 1;

    for (let i = 0; i < numSpaces; i++) {
        //layer += "&nbsp;";
        layer += " ";
    }
    for (let i = 0; i < numBricks; i++) {
        layer += brick;
    } 
      
      //Prints layer to DOM

      //Creates new paragraph element
      let para = document.createElement("p");
      //Adds layer to para
      para.innerHTML += layer;
      
      //Element becomes parent of para
      element.appendChild(para);

      //Summation: 
      //element/para/rowStr. 
      //Element == ID of pyramid. 
      //Para(New paragraph tag) == rowStr.
      //rowStr == layer variable == string to build pyramid

      }
    
      
    }
    