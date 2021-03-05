const Andrew = require("./Andrew.js");  //must be able to pull from Andrew since using it in this file

//x defines age, name, and favoriteColor
let x = new Andrew (24, "Andrew", [
    "#0000FF",  //blue
    "#0000A0", //dark blue
    "#ADD8E6", //light blue
]);

x.speak();      //inherits all characteristics of Andrew which inherited all characteristics of Person and Age