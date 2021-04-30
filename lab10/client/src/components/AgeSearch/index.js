import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #16384e;
    color: #cedcec;
    padding: 2px;
`;

const Title = styled.h2`
    color: #46b2f8;
    text-align: center;
    `;
    
class AgeSearch extends React.Component {
    readAge(event) {
        event.preventDefault();    //prevents default function
        
        let element = document.querySelector("#age");  //equal to whatever is put into "age form"

        fetch("/ages/" + element.value)     //instead of typing into search bar, type in form
        .then((res) => {
            return res.json(); //create json object, otherwise will only say if it was successful or not
        })

        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");   //processed info displayed in reportingArea

            if(processed.error) {   //if error, do this
                reporting.innerHTML = processed.error;
            }
            else {
                reporting.innerHTML = processed.name;
            }
        });
        element.value = "";
    }
    //render function
    render() {
        return (
            <div>
                <Title>Age</Title>

                <form onSubmit={this.readAge}>
                    <input id="age" type="text"/>
                    <Button>Submit</Button>
                </form>
            </div>
        )
    }
}

export default AgeSearch;