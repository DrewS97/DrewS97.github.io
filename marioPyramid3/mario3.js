function determineHeightAndThenDrawPyramid() {
  
  //Sets height == to input value typed by user
  let height = document.getElementById("height").value;

  //Creates btn that 'onclick' calls the printPyramid function
  printPyramid(height);
}

document.getElementById("MyBtn").addEventListener("click", determineHeightAndThenDrawPyramid);

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
        layer += ".";
    }
    for (let i = 0; i < numBricks; i++) {
        layer += "#";
    } 
      
      //Prints layer to DOM

      //Creates new paragraph element
      let para = document.createElement("p");
      //Creates a text node from layer variable
      let rowStr = document.createTextNode(layer);
      //Para becomes parent of rowStr
      para.appendChild(rowStr);
      //Element becomes parent of para
      element.appendChild(para);

      //Summation: 
      //element/para/rowStr. 
      //Element == ID of pyramid. 
      //Para(New paragraph tag) == rowStr.
      //rowStr == layer variable == string to build pyramid

    

      }
    
      
    }
    

