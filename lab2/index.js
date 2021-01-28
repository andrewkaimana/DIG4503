const axios = require("axios"); //can now use axios module

axios('https://pokeapi.co/api/v2/pokemon/bulbasaur') //this is the "case" we are testing

    .then(function (response) { //this function is called if the "case" is accepted
        const pokemon = response.data;  //defines pokemon as the payload returned from the server

        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);  //output is the name and id of a pokemon
        //this information (name and id) is accessible as an object via the response.data request
    })
    .catch(function (error) {   //this function is called if the "case" is rejected ONLY
        console.log("Error: " + error); //output is an error message
    });