import React from 'react';

class StorePicker extends React.Component {

    //myInput = React.createRef();

    render() {
        return (
            <form action="" className="store-selector">
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="store name" name="" id="" />
                <button type="submit">Visit store &rarr;</button>
            </form>
        );
    }
}

export default StorePicker;