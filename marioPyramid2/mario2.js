let height = prompt("Enter a number: ");
printPyramid(height);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */


//building the pyramid
function printPyramid(height) {

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
      //Prints layer to console
      console.log(layer);
      
      //Prints layer to DOM
      let para = document.createElement("p");

      let rowStr = document.createTextNode(layer);

      para.appendChild(rowStr);

      let element = document.getElementById("pyramid");

      element.appendChild(para);
      }
    
      
    }
    

    // TODO #1
    // print that pyramid!