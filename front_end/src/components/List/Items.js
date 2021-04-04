import React, { Component } from "react";
import moment from "moment";

// the Items of the List
class Items extends Component {
    constructor(props) {
        super(props);

        this.createItems = this.createItems.bind(this); // `this` in createItems points to this Items
    }

    delete(key) {
        this.props.delete(key); // use List's delete handler passed as a prop
    }

    // make the list of items, one item at a time
    createItems(item) { 
        if (item.perishable) { // if item has expiry date
            return <li onClick={() => this.delete(item.key)} // delete item if clicked on
                    key={item.key}>
                       <div>{item.text}</div> {/* item text */}
                       <div><em>{moment(new Date(item.date)).fromNow()}</em></div> {/* item expiry date */}
                </li>
        }
        return <li onClick={() => this.delete(item.key)} // delete item if clicked on
                key={item.key}>
                    <div>{item.text}</div>
            </li>
    }

    render() {
        const Entries = this.props.entries; // the item entries passed as a prop
        const listItems = Entries.map(this.createItems); // every entry passed to make into a list item
        return (
            <ul className="theList">
                {listItems} {/* display the list of items */}
            </ul>
        );
    }
}

export default Items;