import React from 'react';

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
                <h2>Age</h2>

                    <form onSubmit={this.readAge}>
                        <input id="age" type="text"/>
                        <button>Submit</button>
                    </form>
            </div>
        )
    }
}

export default AgeSearch;