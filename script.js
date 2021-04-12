// Assignment Code
var generateBtn = document.querySelector("#generate");

//define var for password elements. 
var alpha = "abcdefghijklmnopqrstuvwxyz"
var charLowerCase = alpha.split("");
var charUpperCase = alpha.toUpperCase().split("");
var charNumbers = '0123456789'.split("");
var charSymbols = '"~`!@#$%^&*()_-+={[}]|\:;<,>.?/"'.split("")
    



// Write password to the #password input
function writePassword() {
    function passwordLength() {
        var length = parseInt(prompt("Select a number betweem 8 and 128 to set the password lenght"))

            //return if cancel is pressed.
        if (!length) return;
        // if user don't comply the criteria
        if (length < 8 || length > 128) {
            alert("password needs to be between 8 and 128 characters long")
                // Go back to main Prompt
            return passwordLength();
        }

        // Confirm method for users responds and get a boolean.
        var lowerCaseUse = confirm("Cleck OK to confirm including lowercase characters otherwise click cancel")

        var upperCaseUse = confirm("Cleck OK to confirm including uppercase characters otherwise click cancel")

        var numberUse = confirm("Chick OK to conifirm including numbers otherwise click cancel")

        var symbolUse = confirm("Chick OK to conifirm including special characters otherwise click cancel")

        // if all this aren't true then show message and go back to main func.
        if (!lowerCaseUse && !upperCaseUse && !numberUse && !symbolUse) {
            alert("you need to select at least one criteria.")
            return passwordLength()
        }

        // Define object to use on Password gen Function. 
        var userInput = {
                length: length,
                lower: lowerCaseUse,
                upper: upperCaseUse,
                charNumbers: numberUse,
                symbols: symbolUse,
            }
            // return Values abvobe
        return userInput;
    };

    //passwordLength()

    // Gen pass fuunc begins
    function generatePassword() {
        // define var oprion, will use parameters from passwordLength function
        var options = passwordLength();


        // password pool var, will store results from for loops
        var passwordpool = [];


        // For loops to get values of the vars defined on global scope and store in passpool. 
        if (options.lower) {
            for (let index = 0; index < charLowerCase.length; index++) {
                passwordpool.push(charLowerCase[index]);
            }
        }
        if (options.upper) {
            for (let index = 0; index < charUpperCase.length; index++) {
                passwordpool.push(charUpperCase[index]);
            }
        }
        if (options.charNumbers) {
            for (let index = 0; index < charNumbers.length; index++) {
                passwordpool.push(charNumbers[index]);
            }
        }
        if (options.symbols) {
            for (let index = 0; index < charSymbols.length; index++) {
                passwordpool.push(charSymbols[index]);
            }
        }

        var finalPassword = [];
        // final math will store the results from passpool in final password var
        for (let index = 0; index < options.length; ++index) {
            var randompass = Math.floor(Math.random() * passwordpool.length);

            finalPassword.push(passwordpool[randpass])
        }


        //result in Final pass will .join the DEF var to final result. 
        var DefPassword = finalPassword.join('')


        // Return final result of pass function. 
        return DefPassword;
    };

    var password = generatePassword()

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

generateBtn.addEventListener("click", writePassword);