import Express from 'express';
const App = Express();  //assigns Express to a variable
const port = 3001;      //specifies what port is used

App.get('/people/:id', (req, res) => {  //takes parameter (defined by :)
    res.send("The user ID you have requested is " + req.params.id); //request parameters ()
});

App.get('/book/:item', (req, res) => {
    res.json({userid: req.params.item});
});

App.listen(port, () => {

});