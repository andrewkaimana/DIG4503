import React from 'react';  // any time you create a new component, must use this

function MarketItem (props) { //function component that takes properties

    return (    //can only return one HTML element
        <div>
            <p>Item {props.count}</p>
        </div>
    );
}

export default MarketItem;