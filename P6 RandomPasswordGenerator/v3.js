function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    if (length < 1) {
        return `(password length must atleast be 1)`
    }


    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberSet = "1234567890";
    const symbolSet = "!@#$%^&*()_?~";

    const selectedSets = []
    if (includeLowercase) selectedSets.push(lowerCaseSet);
    if (includeUppercase) selectedSets.push(upperCaseSet);
    if (includeNumbers) selectedSets.push(numberSet);
    if (includeSymbols) selectedSets.push(symbolSet);

    if (selectedSets.length === 0) {
        return `(select atleast one set to generate password)`
    }

    if (length < selectedSets.length) {
        return `(selected set is greater than password length)`
    }

    let allowedChars = selectedSets.join("");
    let password = [];

    for (const set of selectedSets) {
        const index = Math.floor(Math.random() * set.length)
        password.push(set[index])
    }

    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password.push(allowedChars[randomIndex])
    }

    for (let i = password.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join("");
}

const passwordLength = 8
const includeLowercase = false
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
console.log(`Password: ${password}`)