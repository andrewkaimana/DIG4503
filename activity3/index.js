let p = new Promise((resolve, reject) => {
    let a = 7 + 3
    if (a == 10) {
        resolve("Success")
    }
    else {
        reject("Failed")
    }
})

setTimeout(function() { myFunction("This appeared after 5 seconds."); }, 5000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}