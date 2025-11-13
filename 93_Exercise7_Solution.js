// Create a JS program capable of generating password which contains atleast one lowercase, one uppercase and one special characters.
// Create a Password Classto acheive the same

class Password {
    constructor() {
        console.log("Welcome to Password Generator");
        this.pass = "";
    }

    generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let special = "!@#$%^&*()_[]{};:'.,|";

        if (len < 3) {
            console.log("Your password should be atleast 3 characters long");
        }
        else {
            let i = 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
                i += 3;
            }
            this.pass = this.pass.substring(0, len);
            return this.pass;
        }
    }
}

let p = new Password();
console.log(p.generatePassword(7));
console.log(p.generatePassword(79));
console.log(p.generatePassword(87));
console.log(p.generatePassword(77));
console.log(p.generatePassword(17));