import Express from 'express';
const App = Express();  //assigns Express to a variable
const port = 45030;      //specifies what port is used

const names = [         //array given in lab
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get('/people/:person', (req, res) => {  //takes parameter (defined by :)
    let person = req.params.person;         //set to variable so don't have to type it out every time
    if (names.includes(person)) {          //if user inputs name in array, do this (must match exact formatting)
        res.json({name: person});           
    } else {                                //else if name is not in array, do this
        res.json({ name: "not found"});
    }
});

App.get('/search/:name', (req, res) => {  //takes parameter (defined by :)
    const name = names.filter(str => str.includes(req.params.name));  //shorthand notation, filter includes a function that takes a string parameter
    
    if (name != 0) {         //if array has something in it, do this
        res.json({search: [name]});
    } else {
        res.json({ search: "not found"});
    }
});

App.listen(port, () => {

});