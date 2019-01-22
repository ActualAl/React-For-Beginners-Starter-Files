import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  handleChange = (e, key) => {
    const fish = this.props.fishes[key];
    console.log(fish);
  };

  renderInventory = key => {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          name="name"
          placeholder="Fish name"
          value={fish.name}
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          name="price"
          placeholder="Fish price"
          value={fish.price}
        />
        <select name="status" placeholder="Fish status" value={fish.status}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea name="desc" placeholder="Fish desc" value={fish.desc} />
        <input
          type="text"
          name="image"
          placeholder="Fish image"
          value={fish.image}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
