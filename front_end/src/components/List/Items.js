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
        if (item.isReminder) { // if item is a reminder
            return <li onClick={() => this.delete(item.key)} // delete item if clicked on
                    key={item.key}>
                        <div><b>{item.title}</b></div>
                        <div>{item.text}</div> {/* item text */}
                        <div>Due: <em>{moment(new Date(item.date)).fromNow()}</em></div> {/* item expiry date */}
                        <div>Category: {item.category}</div>
                </li>
        }
        // if item is a person
        return <li onClick={() => this.delete(item.key)} // delete item if clicked on
                key={item.key}>
                    <div>Name: {item.text}</div>
                    <div>Relation: {item.relation}</div>
                    <div>E-mail: {item.email}</div>
                    <div>Phone: {item.phone}</div>
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