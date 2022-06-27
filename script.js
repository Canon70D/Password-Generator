// Assignment Code
var generateBtn = document.querySelector("#generate");

/* attempt to generate passwor but found password combo was limited, had to change way of generating
var number = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbol = [ "!","#","$","%","&","'",")","(",",","*","+","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~","[","]","/"," "];

var index1 = Math.floor(Math.random() * number.length);
var index2 = Math.floor(Math.random() * lowerCase.length);
var index3 = Math.floor(Math.random() * upperCase.length);
var index4 = Math.floor(Math.random() * symbol.length);

var entry1 = number[index1];
var entry2 = lowerCase[index2];
var entry3 = upperCase[index3];
var entry4 = symbol[index4];

var entryCombo = [entry1,entry2,entry3,entry4 ];

var passwordLength = 8;
var password = "";

while(passwordLength > password.length){
  var newEntry = entryCombo[Math.floor(Math.random() *entryCombo.length)];
  password += newEntry;
}
console.log(password);
*/

//creat an object contain 4 strings which have different typrs of charactors
var choice = {
  number: "0123456789",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialCharactors: " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
}

//this is an array has 4 functions that the each function would return 1 random charactor from each strigs
var choiceCombo = [
  function number(){
    return choice.number[Math.floor(Math.random() * choice.number.length)];
  },
  function lowerCase(){
    return choice.lowerCase[Math.floor(Math.random() * choice.lowerCase.length)];
  },
  function upperCase(){
    return choice.upperCase[Math.floor(Math.random() * choice.upperCase.length)];
  },
  function specialCharactors(){
    return choice.specialCharactors[Math.floor(Math.random() * choice.specialCharactors.length)];
  }
];

// Write password to the #password input
function writePassword() {
  //ask to set the length of password
  var passwordLength = window.prompt("Enter the length of password:");
  
  //validate the input of length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    window.alert("The input should be a number between 8 to 128");
  } else{
    //ask to chose what charactor the password has
    var numberCheck = window.confirm("include a number?");
    var upperCheck = window.confirm("include an upper case letter?");
    var lowerCheck = window.confirm("include a lower case letter?");
    var charactorCheck = window.confirm("include a special charactor?");
    //validate the charactor choice
    if(!numberCheck && !upperCheck && !lowerCheck && !charactorCheck){
      window.alert("at least one character type should be selected ");
    } 
    //else if(!upperCheck && !lowerCheck && !charactorCheck){
     // choiceCombo = choiceCombo.splice(0,1);
    //} else if(!numberCheck && !lowerCheck  && !charactorCheck){
     // choiceCombo = choiceCombo.splice(2,1);
    //} else if(!numberCheck && !upperCheck  && !charactorCheck){
     // choiceCombo = choiceCombo.splice(1,1);
    //} else if(!numberCheck && !upperCheck && !lowerCheck){
      //choiceCombo = choiceCombo.splice(3,1);
    //} 
      else{
      //generate password
      realpassword = "";
      while(passwordLength > realpassword.length){
        var finalPassword = choiceCombo[Math.floor(Math.random() *choiceCombo.length)];
        
        realpassword += finalPassword();
      
      }
    }
  }
  var password = realpassword;
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
