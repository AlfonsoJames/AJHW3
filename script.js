var charTotal;
var included = new Array(0);
var textString = new Array(0);
// created character arrays and set conditions, prompts, alerts regarding them //
function generatePassword() { 

var lowercase = "abcdefghijklmnopqrstuvwxyz".split ("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split ("");
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split ("");
var numbers = "1234567890".split ("");

  var input = prompt("Choose Character length... Minimum: 8 / Maximum: 128"); 
  if (input < 8 || input > 128) {
    alert("Password must be between 8 and 128 Characters");
    location.reload();
    return false;
  }
    if (confirm("Utilize Lowercase?")) {
    alert("Adding Lowercase");
    var l = true;
    console.log("Confirm Lowercase acknowledged");
    console.log(l);
    included.push(...lowercase);
  } 
  else {
    l = false;
    alert("No Lowercase");
    console.log("Confirm Lowercase acknowledged");
    console.log(l);
    
  }
  if (confirm("Utilize Uppercase?")) {
    alert("Adding Uppercase");
    var u = true;
    console.log("Confirm Uppercase acknowledged");
    console.log(u);
    included.push(...uppercase);
  } 
  else {
    u = false;
    alert("No Uppercase");
    console.log("Confirm Uppercase acknowledged");
    console.log(u);
  }
  if (confirm("Utilize Numbers?")) {
    alert("Adding Numbers");
    var n = true;
    console.log("Confirm Numbers acknowledged");
    console.log(n);
    included.push(...numbers);
  } 
  else {
    n = false;
    alert("No Numbers");
    console.log("Confirm Numbers acknowledged");
    console.log(n);
  }
  if (confirm("Utilize Special Characters?")) {
    alert("Adding Special Characters");
    var s = true;
    console.log("Confirm Special acknowledged");
    console.log(s);
    included.push(...specChar);
  } 
  else {
    s = false;
    alert("No Special Characters");
    console.log("Confirm Special acknowledged");
    console.log(s);
  }
  if (!s && !n && !u && !l) {
    alert ("No Characters Selected");
    location.reload();
    return false;
  }
  
  console.log(included);
  charTotal = parseInt(input);
 // created randomizer to pull from arrays //
  var i 

for (i = 0; i < charTotal; i++){
  var random = included[Math.floor(Math.random() * included.length)];
  textString.push(random);
  document.getElementById("password").innerHTML;  
    console.log(textString);

  if (i >= charTotal) return;
  
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  included = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = textString.join("");
}
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

