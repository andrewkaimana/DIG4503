import Express from "express";
import fs from "fs";
import cors from "cors";

const App = Express();
const port = 3010;
App.use(cors());

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents)   //turning fileContents variable into json object

App.use("/", Express.static("client/build"));

App.get("/employees/:name", (req, res) => {
    let result = {"error": "not found"};

    database.forEach((value) => {
        if(req.params.name == value.name) {
            result = value;
        }
    });

    res.json(result);
})

App.get("/ages/:age", (req, res) => {
    let result = {"error": "not found"};

    database.forEach((value) => {
        if(req.params.age == value.age) {
            result = value;
        }
    });

    res.json(result);
})

App.post("/employees/:name/:age", (req, res) => {
    let result = {
        "name": req.params.name,
        "age": parseInt(req.params.age) //parsing a string, returning integer
    };

    database.push(result);

    fs.writeFileSync("database.json", JSON.stringify(database, null, "\t"));

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
})