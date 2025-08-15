// Create a JavaScript program capable of generating a password, which contains aleast one lowercase, one uppercase and one special characters.
// create a password class to achieve the same

class Password {
    static UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    static LowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    static NumberChars = "0123456789";
    static SpecialChars = "!@#$%^&*()_+-=[]{}|;':\",.<>/?`~";
    static AllChars = Password.UpperCaseChars + Password.LowerCaseChars + Password.NumberChars + Password.SpecialChars;
    static FunnyPasswords = ["password", "ineedapassword", "changeme", "secret", "nothing", "iforgot", "whyyouneedit", "ohhreally", "hacked"];

    constructor() {
        this.password = "";
    }

    static getRandomChar(charSet) {
        return charSet[Math.floor(Math.random() * charSet.length)];
    }

    static shufflePassword(password) {
        const arr = password.split(' ');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // generating a random index
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr.join(' ');
    }

    // A strong Password will have a min of 1 char from upper, lower, numbers and special chars
    generateStrongPassword(length) {
        this.password = "";
        this.password += Password.getRandomChar(Password.UpperCaseChars); // add a upper case char
        this.password += Password.getRandomChar(Password.LowerCaseChars); // add a lower case char
        this.password += Password.getRandomChar(Password.NumberChars); // add a number case char
        this.password += Password.getRandomChar(Password.SpecialChars); // add a special case char

        for (let i = this.password.length; i < length; i++) {
            this.password += Password.getRandomChar(Password.AllChars);
        }

        return Password.shufflePassword(this.password);
    }

    // A Super Strong Password will have a min of 1 char from upper, lower and numbers while 3 from special chars
    generateSuperStrongPassword(length) {
        this.password = "";
        this.password += Password.getRandomChar(Password.UpperCaseChars); // add a upper case char
        this.password += Password.getRandomChar(Password.LowerCaseChars); // add a lower case char
        this.password += Password.getRandomChar(Password.NumberChars); // add a number case char
        this.password += Password.getRandomChar(Password.SpecialChars); // add a special case char
        this.password += Password.getRandomChar(Password.SpecialChars); // add a special case char
        this.password += Password.getRandomChar(Password.SpecialChars); // add a special case char

        for (let i = this.password.length; i < length - 1; i++) {
            this.password += Password.getRandomChar(Password.AllChars);
        }

        Password.shufflePassword(this.password);
        if (this.password.length > length) { // edge case where password length is greater than desired length
            return this.password.substring(0, length);
        }

        return this.password;
    }

    // A Weak Password will only have characters from lowecase and numbers
    generateWeakPassword(length) {
        const weakChars = Password.LowerCaseChars + Password.NumberChars;

        this.password = "";
        for (let i = 0; i < length; i++) {
            this.password += Password.getRandomChar(weakChars);
        }

        return Password.shufflePassword(this.password);
    }

    // A Funny Password would comprise from the array provided
    generateFunnyPassword() {
        this.password = "";
        this.password = Password.getRandomChar(Password.FunnyPasswords);

        return this.password;
    }

    // Main function to generate Password
    generatePassword(length, type) {
        switch (type) {
            case 'strong':
                return this.generateStrongPassword(length);
            case 'weak':
                return this.generateWeakPassword(length);
            case 'super-strong':
                return this.generateSuperStrongPassword(length);
            case 'funny':
                return this.generateFunnyPassword();
            default:
                return this.generateStrongPassword(length);
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const passwordGenerator = new Password();
    const generateBtn = document.getElementById("generate-btn");
    const passwordOutput = document.getElementById("password-output");
    const backgroundToggle = document.getElementById("background-toggle");
    const passwordLengthInput = document.getElementById("password-length");
    const passwordTypeSelect = document.getElementById("password-type");

    generateBtn.addEventListener("click", () => {
        const length = parseInt(passwordLengthInput.value);
        const type = passwordTypeSelect.value;

        let generatedPassword;

        passwordLengthInput.disabled = (type === "funny"); // Disable length input if password is of funny typel 

        if (type === "funny") {
            generatedPassword = passwordGenerator.generatePassword(0, type);
        }
        else if (length >= 4) {
            generatedPassword = passwordGenerator.generatePassword(length, type);
        }
        else {
            generatedPassword = "Length of the password must be atleast 4 characters";
        }

        passwordOutput.textContent = generatedPassword;
    });

    backgroundToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
    });
});