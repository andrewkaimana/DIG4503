class Age {
    constructor(age) {  //constructer is called method because it is within a Class
        this.age = age;   //this refers to the class that "age" is in - "Age"
    }
}

module.exports = Age; //able to incorporate this class into other files, visible outside of this file