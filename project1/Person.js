const chalk = require("chalk");     //must require since using Chalk module
const Age = require("./Age.js");    //must require since inheriting traits from Age

class Person extends Age{   //Person inherits all properties of Age
    constructor(age, name, favoriteColor) {
        super(age);         //this comes from parent element Age
        this.name = name;   //this is a new element (not from Age) that is added to Person class
        this.favoriteColor = favoriteColor;     //this is a new element (not from Age) that is added to Person class
    }
    speak() {
        for (let i=0; i < this.favoriteColor.length; i++) { //for however many favoriteColors there are, the console.log command will run that many times
            console.log(chalk.hex(this.favoriteColor[i])(this.name) + ' is ' + (this.age) + ' years old');  //favoriteColor, name, and age are printed in console
        }
    }
}

module.exports = Person; //able to incorporate this class into other files, visible outside of this file