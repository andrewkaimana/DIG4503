const Person = require("./Person.js");  //located in the same file, if in parent folder, use ../

class Andrew extends Person {    //Andrew inherits all properties of Person
    constructor(name, colors) {
        super(name, colors);      //uses all methods of its parent elements
    }
}

module.exports = Andrew;