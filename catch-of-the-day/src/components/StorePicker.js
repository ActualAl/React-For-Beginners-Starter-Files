import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input
                    type="text"
                    required
                    placeholder="store name"
                    name=""
                    id=""
                    ref={this.myInput}
                    defaultValue={getFunName()} />
                <button type="submit">Visit store &rarr;</button>
            </form>
        );
    }
}

export default StorePicker;