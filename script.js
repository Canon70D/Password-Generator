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
  specialCharactors: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
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

//can't make some of the user choice work, had to do this stuid way ...
var choiceCombo1 = [
  function number(){
    return choice.number[Math.floor(Math.random() * choice.number.length)];
  },
  function upperCase(){
    return choice.upperCase[Math.floor(Math.random() * choice.upperCase.length)];
  },
  function specialCharactors(){
    return choice.specialCharactors[Math.floor(Math.random() * choice.specialCharactors.length)];
  }
];

var choiceCombo2 = [
  function number(){
    return choice.number[Math.floor(Math.random() * choice.number.length)];
  },
  function lowerCase(){
    return choice.lowerCase[Math.floor(Math.random() * choice.lowerCase.length)];
  },
  function specialCharactors(){
    return choice.specialCharactors[Math.floor(Math.random() * choice.specialCharactors.length)];
  }
];

var choiceCombo3 = [
  function number(){
    return choice.number[Math.floor(Math.random() * choice.number.length)];
  },

  function upperCase(){
    return choice.upperCase[Math.floor(Math.random() * choice.upperCase.length)];
  },

];

var choiceCombo4 = [
  function number(){
    return choice.number[Math.floor(Math.random() * choice.number.length)];
  },

  function specialCharactors(){
    return choice.specialCharactors[Math.floor(Math.random() * choice.specialCharactors.length)];
  }
];

var choiceCombo5 = [

  function lowerCase(){
    return choice.lowerCase[Math.floor(Math.random() * choice.lowerCase.length)];
  },

  function specialCharactors(){
    return choice.specialCharactors[Math.floor(Math.random() * choice.specialCharactors.length)];
  }
];

var choiceHold = [];
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
    var lowerCheck = window.confirm("include a lower case letter?");
    var upperCheck = window.confirm("include an upper case letter?");
    var charactorCheck = window.confirm("include a special charactor?");
    //validate the charactor choice
    if(!numberCheck && !upperCheck && !lowerCheck && !charactorCheck){
      window.alert("at least one character type should be selected ");
      return;
    } 
    //was trying to do this to avoid such a long IF statement and making different choiceCombo...
    //but can't figure out a way to achieve match userchoice to the name of the choiceCombo function and call that function along ...
      /*function generatePassword(){
      var realpassword = "";
      while(passwordLength > realpassword.length){
        var finalPassword = choiceCombo[Math.floor(Math.random() *choiceCombo.length)];
        var check = userChoice match ---> name of the choiceCombo.function;
        if(check){
        realpassword += finalPassword();
          }
      }
      return realpassword;
    }
    */
      //number only
      else if(!upperCheck && !lowerCheck && !charactorCheck){
      choiceHold = choiceCombo.slice(0,1);
    } 
      //lowercase only
      else if(!numberCheck && !upperCheck  && !charactorCheck){
        choiceHold = choiceCombo.slice(1,2);
    } 
      //uppercase only
      else if(!numberCheck && !lowerCheck  && !charactorCheck){
        choiceHold = choiceCombo.slice(2,3);
    } 
      //symbol only
      else if(!numberCheck && !upperCheck && !lowerCheck){
        choiceHold = choiceCombo.slice(3,4);
    } 
      //number+lowercase
      else if(!upperCheck  && !charactorCheck){
        choiceHold = choiceCombo.slice(0,2);
    }
      //lowercase + uppercase
      else if(!numberCheck  && !charactorCheck){
        choiceHold = choiceCombo.slice(1,3);
    }
      //uppercase + symbol
      else if(!numberCheck  && !lowerCheck){
        choiceHold = choiceCombo.slice(2,4);
    }
      //numner + symbol
      else if(!upperCheck && !lowerCheck){
        //var num = choiceCombo[0];
        //var sym = choiceCombo[3];
        choiceHold = choiceCombo4;
    }
      //numner + uppercase
      else if(!lowerCheck && !charactorCheck){
        //var num = choiceCombo[0];
        //var upper = choiceCombo[2];
        choiceHold = choiceCombo3;
    }
      //lowercase + symbol
      else if(!numberCheck && !upperCheck){
        //var lower = choiceCombo[1];
        //var sym = choiceCombo[3];
        choiceHold = choiceCombo5;
    }
      //lowercase + uppercase + symbol
      else if(!numberCheck){
        choiceHold = choiceCombo.slice(1,4);
    }    
      //number + lowercase + uppercase
      else if(!charactorCheck){
        choiceHold = choiceCombo.slice(0,3);
    }      
    //number + uppercase + symbo
      else if(!lowerCheck){
        //var num = choiceCombo[0];
        //var upper = choiceCombo[2];
        //var sym = choiceCombo[3];
        choiceHold = choiceCombo1;
    }
    //number + lowercase + symbo
    else if(!upperCheck){
      //var num = choiceCombo[0];
      //var lower = choiceCombo[1];
      //var sym = choiceCombo[3];
      choiceHold = choiceCombo2;
  }    
    //all combo
    else{
      choiceHold = choiceCombo;
    }
  }

        //generate password
        function generatePassword(){
          var realpassword = "";
          while(passwordLength > realpassword.length){
            var finalPassword = choiceHold[Math.floor(Math.random() *choiceHold.length)];
            
            realpassword += finalPassword();
  
          }
          return realpassword;
        }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
