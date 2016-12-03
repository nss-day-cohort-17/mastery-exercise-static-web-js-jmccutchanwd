//------ John McCutchan
/*
* NOTES
*
* Things I learned:
*
* 1: A nested for() loop will not build this tree. It is best for cycling through an array[]
* or obj(), and than cycling through an array that is nested inside.
*
* 2. The Do While loop runs one loop limeter, but allows multiple timers to run inside
* the loop. This allows one timer to count down at the same time as the main one counts up.
* Thing to watch is that the the two hit their end at the same time, otherwise it errors.
*
* 3. Enter key validation and field focus.
*
* 4. A obj.value acts like a strin when you try to use JavaScript Arithmetic Operators on it.
* It is best to declare a new variable and put the var for the object in a Number() and
* than act on it. Example: var modCounter = Number(hgt) + 7; ...where hgt is the value of a
* number in an obj().
*
*/
/* +++++++++++++++++++++++++ Start JS +++++++++++++++++++++++ */
/*============================*/
/*      Global Variables      */
/*============================*/
var button = document.getElementById("grow"); // grow your tree button
var treeData = {}; // object that holds symbol and height
var tree = ""; // holder to drop lines in for page
var spacer = " "; // empty space spacer
/*============================*/
/*      Event Listeners       */
/*============================*/
button.addEventListener("click", checkFields); // grow your tree button listener
window.addEventListener('keypress', function (e) { // added enter key listener
  /* ----- Input Focus Validation ---- */
  if ((e.keyCode == 13) && (document.querySelector("input").focus() !== null)) {
    console.log("just hit enter" + document.activeElement); // checks to see if enter key is hit and element in the focus field
    checkFields(); // calls checkFields
  }
}); // << Because an autonomous function was called // end enter key and focus input validation
/*=====================*/
/*      Functions      */
/*=====================*/
function checkFields() { /* ======= Field Validation ====== */
  var check = document.getElementById("symbol").value; // looks in input assigns value to check
  var check2 = document.getElementById("height").value; // looks in input and assigns value to check 2
  if (check == '' || check == null || check2 == '' || check2 == null) { // checks values against conditions
    console.log("check contents" + check + check2); // shows values in console
    alert("Please fill in the fields first."); // Polite message to fill int he blanks.
  }else{
    getData(); // calls getData
  }
} /* ==== End checkFields() ==== */
function getData(){ /* ===== Pulls Data From <Input> fields==== */
  var symbol = document.getElementById("symbol").value + " "; // gets sybol from html adds 1 space
  var height = document.getElementById("height").value; // gets height from html
  treeData.symbol = symbol; // passes symbol and it's value into obj treeData()
  treeData.height = height; // passes height and it's value into obj treeData()
  console.log(treeData); // **** test data **** displays object contents ****
  treeBuild(treeData.symbol, treeData.height); // pass object.symbol and .height to treeBuild
} /* ==== End getData() ==== */
function treeBuild(sym, hgt) { /* ==== Builds Tree, pass treeData.symbol, treeData.height ==== */
  var conResult = ""; // emtpy container to hold console line
  var htmlResult = ""; // empty container to hold html line
  var spacer = " "; // empty space that serves as spacer
  var modCounter = Number(hgt) + 7; // turns hgt into a number and adds 7
  var i = 1; // symbol counter
  var j = modCounter; // spacer counter
  do { // loop that builds the tree in html and console
    conResult = spacer.repeat(j) + sym.repeat(i); // builds line for console
    htmlResult += "<li>" + sym.repeat(i) + "</li>";  // builds line for html <li>
    document.getElementById("displayTree").innerHTML = htmlResult; // returns tree to html
    console.log("%c" + conResult, "color: rgba(17, 110, 63,1.0);"); // renders tree in console
    i += 2; // symbol counter
    j -= 2; // spacer counter
  } while (i < modCounter); // loop limiter
    /* ================ Final Check on Loop Limiter and adds Octocat  ==================== */
    console.log("Loop Limiter: " + modCounter); // **** test data **** displays loop limiter ****
    console.log('%c', 'padding:150px 200px; margin-top: 200px; margin-left: 250px; background:url(http://vignette4.wikia.nocookie.net/habitrpg/images/6/61/Octocat.png/revision/latest?cb=20140206004650) no-repeat;');
} /* ==== End treeBuild() ==== */
/* +++++++++++++++++++++++++ END JS +++++++++++++++++++++++ */
