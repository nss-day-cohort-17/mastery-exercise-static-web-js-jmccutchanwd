//------ John McCutchan
/*
Notes:

Create a `tree` function that should build a pine tree out of
a character in the Chrome dev tools console.(function treeBuild())

It accepts a single object as an argument. The object should
have two key/value pairs.

A key that specifies the height of the pine tree. (#height)

The value for the height of the tree should be from user input in
a `<input type="text">` field in the DOM.

A key that specifies which character to use to build the pine tree.(#symbol)

The character to use should be from user input in a `<input type="text">`
field in the DOM.

Once the user enters in a number, and a character, the user can either
then just press the enter key _(as long as the cursor is in one of the
input fields)_, or click a button that is labeled "Grow your tree" and
the tree should be shown in the console.

This requires you to add an event listener to the button, as well as
an event listener for the enter/return key.

If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.
*/
/*------- Global -------*/
var button = document.getElementById("grow"); // grow your tree button
var treeData = {}; // object that holds symbol and height
var tree = ""; // holder to drop lines in for page
var spacer = " ";
/*------- Listeners -------*/
button.addEventListener("click", getData);// grow your tree button listener
/*------- Function -------*/
function getData(){
  var symbol = document.getElementById("symbol").value + " ";
  var height = document.getElementById("height").value;
  treeData.symbol = symbol;
  treeData.height = height;
  console.log("Inputted data: " + symbol + " " + height);
  console.log(treeData); // see if object is set up
  treeBuild(symbol, height); // pass object.symbol and .height to treeBuild
}
function treeBuild(symbol, height) {
    var conResult = "";
    var htmlResult = "";
    var spacer = " ";
    var i = 0;
    var j = height;
    do {
      i += 1;
      j -= 1;
      conResult = spacer.repeat(j) + symbol.repeat(i);
      htmlResult += "<li>" + symbol.repeat(i) + "</li>";
      document.getElementById("displayTree").innerHTML = htmlResult;
      console.log(conResult)
      console.log(spacer);
} while (i < height);
;
}
 // var i = 1; i < height + 1; i++;
 //    var j = height;
 //    var line = spacer.repeat(j) + symbol.repeat(i);
 //    console.log(line);
//
// function treeBuild(sym, hgt){
//   console.log("Function arguments: " + sym + " " + hgt); // check to see if obj pass arguments
//   var line = sym;
//   var spacer = " ";
//   var j = hgt;
//   for(var i = 0; i < hgt; i++){
//     j -= 1;
//     console.log(spacer.repeat(j) + line.repeat(i));
//     tree += "<li>" + line.repeat(i) + "</li>";
//   }
//   var result = document.getElementById("displayTree");
//   result.innerHTML = tree;
//   console.log("%c MerryChristmas ", "background: green; color: yellow; font-size: x-large; text-align: center");
// }

// "%c text",
// "background: green; color: yellow; font-size: x-large; text-align: center");

//If either of the input fields does not have a value in it when the user presses
//the enter key, or presses the button, then display an alert stating that both
//fields must have a value.


//sort symbols for If not statement....come back to
//pass symbol and height to an obj (2 key/value pairs)....complete
//pass that object as argument value to function
//add event listener to call treeBuild, for enter key while one of the input fields has focus.

/*-------- Thinking Lines Below --------------*/

/*=========== There be Dragons here ===================*/
// function treeData(symbol, height) {
//     var symbol = document.getElementById("symbol").value;
    // if ( symbol.value !== /^[\w&.\-]+$/ ){
//     //   alert("Please enter one # or @");
//     //   // return;
//     // }
//     var height = document.getElementById("height").value;
//     // if(height !== "3"||"4"||"5"||"6"||"7"||"8"||"9"||"10"||"11"||"12"||"13"||"14"||"15"){
//     //   alert("Please enter one number, 3 - 15")
//     // }
//     this.symbolTree = symbol;
//     this.heightTree = height;
//     console.log("Can you read this? " + symbol + " " + height);
//     console.log(treeData);
// }
