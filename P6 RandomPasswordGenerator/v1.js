
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let allowedChars = "";
    let password = "";

    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberSet = "1234567890";
    const symbolSet = "!@#$%^&*()_?~"

    allowedChars += includeLowercase ? lowerCaseSet : "";
    allowedChars += includeUppercase ? upperCaseSet : "";
    allowedChars += includeNumbers ? numberSet : "";
    allowedChars += includeSymbols ? symbolSet : "";

    if(length < 1) {
        return`(password length must atleast be 1)`
    }
    if(allowedChars.length === 0) {
        return `(select atleast one set to generate password)`
    }

    for(let i = 0; i <length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return password;
}

const passwordLength = 12
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
console.log(`Password: ${password}`)