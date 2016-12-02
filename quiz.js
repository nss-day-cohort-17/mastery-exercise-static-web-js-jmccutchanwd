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
var button = document.getElementById("grow");
var treeData = {}; // object that holds symbol and height
/*------- Listeners -------*/
button.addEventListener("click", treeBuild);// button listener
/*------- Function -------*/
function treeData(symbol, height) {
    this.symbolTree = symbol;
    this.heightTree = height;
}
function treeBuild(){
  var symbol = document.getElementById("symbol").value;
  treeData.symbolTree = symbol;
  var height = document.getElementById("height").value;
  treeData.symbolHeight = height;
  console.log("Can you read this? " + symbol + " " + height);
  console.log(treeData);
}

//pass symbol and height to an obj (2 key/value pairs)
//pass that object as argument value to function
//add event listener to call treeBuild, for enter key while one of the input fields has focus.
