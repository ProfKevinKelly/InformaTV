import React, { Component } from "react";
import Items from "./Items";
import "./List.css";

// The List functionality
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: this.props.listName, // list name prop e.g. "Reminders"
            itemName: this.props.itemName, // item name prop e.g. "reminder"
            perishable: this.props.perishable, // true if item has expiry sate
            items: [], // start with empty array of the list items
        };
        this.addItem = this.addItem.bind(this); // addItem belongs to List
        this.deleteItem = this.deleteItem.bind(this); // deleteItem belongs to List
    }

    // add item event handler
    addItem(item) {
        if (this._inputElement.value !== "") {

            // make the new item
            const newItem = {
                text: this._inputElement.value, // item name
                key: Date.now(), // use item creation date and time as a unique key
                date: this.date.value, // item expiry date, may be ignored if unnecessary
                perishable: this.state.perishable // whether or not item expiry date is ignored
            };
            
            // new state is the old state plus the new item, state is not modified, but replaced
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            // empty the input text box
            this._inputElement.value = "";
        }
        else { // if user enters empty item
            alert("Please type in the input box");
        }

        console.log(this.state.items); // log new state/items

        item.preventDefault(); // block unwanted default behaviour (such as reloading the page)
    }

    // delete item event handler
    deleteItem(key) {
        // make new list of items filtering out the deleted item by its key
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems // new state of items without deleted item
        });
    }

    render() {
        return(
            <div className="ListMain">
                {/* display the list header */}
                <h2>{this.state.listName}</h2> {/* name of the list */}

                <form onSubmit={this.addItem}> {/* add list item on submit */}
                    {/* text input box */}
                    <input
                        ref={(n) => this._inputElement = n}
                        placeholder={this.state.itemName}> 
                    </input>
                    <br/>
                    {/* expiry date input box */}
                    <input type="datetime-local" ref={(d) => this.date = d}></input>
                    <br/>
                    {/* add button */}
                    <button type="submit">Add</button>
                </form>

                {/* display the list items */}
                <Items entries={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default List;