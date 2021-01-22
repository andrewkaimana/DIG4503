const chalk = require('chalk');

class Person {
    constructor(name, favoriteColor) {  //constructer is called method because it is within a Class
        this.name = name;   //this refers to the class that "name" is in - "Person"
        this.favoriteColor = favoriteColor;
    }
    speak() {
        for (let i=0; i < this.favoriteColor.length; i++) {
            console.log(chalk.hex(this.favoriteColor[i])(this.name));
        }
    }
}

module.exports = Person; //able to incorporate this class into other files, visible outside of this file