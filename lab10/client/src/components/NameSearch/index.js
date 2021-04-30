import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #16384e;
    color: #cedcec;
    padding: 2px;
`;

const Title = styled.h2`
    color: #2e75a3;
    text-align: center;
    `;

class NameSearch extends React.Component {
    readName(event) {
        event.preventDefault(); //stops the default action from occuring

        let element = document.querySelector("#name");  //find specific element

        fetch("/employees/" + element.value)
        .then((res) => {    //parse string into JS object
            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");   //find specific element

            if(processed.error) {
                reporting.innerHTML = processed.error;
            }
            else {
                reporting.innerHTML = processed.age;
            }
        });
        element.value = ""; //element is equal to user input
    }
    //render function
    render() {
        return(
            <div>
                <Title>Name</Title>

                <form onSubmit={this.readName}>
                    <input id="name" type="text"/>
                    <Button>Submit</Button>
                </form>
            </div>
        )
    }
}

export default NameSearch;