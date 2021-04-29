import React from 'react';
/*import './style.css';*/
import styled from 'styled-components';

const Button = styled.button`
    backgroundColor: palevioletred;
    color: #fff;
    padding: 0px;
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
                <h2>Name</h2>

                <form onSubmit={this.readName}>
                    <input id="name" type="text"/>
                    <Button>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default NameSearch;