
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    let allowedChars = "";
    let password = [];

    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberSet = "1234567890";
    const symbolSet = "!@#$%^&*()_?~";


    if (includeLowercase && length > 4) {
        let addIndex = Math.floor(Math.random() * lowerCaseSet.length);
        let option = lowerCaseSet[addIndex]
        password.push(option)
    }

    if (includeUppercase && length > 4) {
        let addIndex = Math.floor(Math.random() * upperCaseSet.length);
        let option = upperCaseSet[addIndex]
        password.push(option)
    }

    if (includeNumbers && length > 4) {
        let addIndex = Math.floor(Math.random() * numberSet.length)
        let option = numberSet[addIndex]
        password.push(option)
        console.log(password)
    }

    if (includeSymbols && length > 4) {
        let addIndex = Math.floor(Math.random() * symbolSet.length)
        let option = symbolSet[addIndex]
        password.push(option)
        console.log(password)
    }

    allowedChars += includeLowercase ? lowerCaseSet : "";
    allowedChars += includeUppercase ? upperCaseSet : "";
    allowedChars += includeNumbers ? numberSet : "";
    allowedChars += includeSymbols ? symbolSet : "";


    if (length < 1) {
        return `(password length must atleast be 1)`
    }
    if (allowedChars.length === 0) {
        return `(select atleast one set to generate password)`
    }

    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password.push(allowedChars[randomIndex])
    }

    for (let i = password.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }
    console.log(password)

    return password.join("");
}

const passwordLength = 4
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
console.log(`Password: ${password}`)