import React, {Component} from 'react'; //destructuring React to only include Component
import MarketItem from './Item'

class Market extends Component {
    constructor(props) {    //must be included in order to use "state"
        super(props)    //push back any data to component
        this.state = {
            count: 0    //object called "count" is set to 0
        };
    };

    render() {

        return(
            <div>
                <MarketItem count={this.state.count}/>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Add Item</button>
            </div>

        );
    }
}

export default Market;