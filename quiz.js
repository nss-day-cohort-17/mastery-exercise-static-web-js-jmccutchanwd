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
button.addEventListener("click", checkFields);// grow your tree button listener
/*------- Function -------*/
function checkFields(){
  console.log("check fields fired");
  var check = document.getElementById("symbol").value;
  var check2 = document.getElementById("height").value;
  if (check == '' || check == null || check2 == '' || check2 == null) {
    console.log("check contents" + check);
    alert("Please fill in the fields first.");
  }else{
    getData();
  }
}
function getData(){
  var symbol = document.getElementById("symbol").value + " ";
  var height = document.getElementById("height").value;
  treeData.symbol = symbol; // passes symbol and it's value into obj treeData()
  treeData.height = height; // passes height and it's value into obj treeData()
  console.log(treeData); // **** test data **** displays object contents ****
  treeBuild(treeData.symbol, treeData.height); // pass object.symbol and .height to treeBuild
}
function treeBuild(sym, hgt) { // pass treeData.symbol, treeData.height
    var conResult = ""; // emtpy container to hold console line
    var htmlResult = ""; // empty container to hold html line
    var spacer = " "; // empty space that serves as spacer
    var modCounter = Number(hgt) + 7; // turns hgt into a number and adds 7
    var i = 1; // symbol counter
    var j = modCounter; // spacer counter
    do {
      conResult = spacer.repeat(j) + sym.repeat(i); // builds line for console
      htmlResult += "<li>" + sym.repeat(i) + "</li>"; // returns tree to html
      document.getElementById("displayTree").innerHTML = htmlResult; // builds line for html
      console.log("%c" + conResult, "color: rgba(17, 110, 63,1.0);"); // renders tree in console
      i += 2; // symbol counter
      j -= 2; // spacer counter
} while (i < modCounter); // loop limiter
console.log("Loop Limiter: " + modCounter); // **** test data **** displays loop limiter ****
console.log('%c', 'padding:150px 200px; margin-top: 200px; margin-left: 250px; background:url(http://vignette4.wikia.nocookie.net/habitrpg/images/6/61/Octocat.png/revision/latest?cb=20140206004650) no-repeat;');
}
