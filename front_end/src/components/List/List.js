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
            items: [], // array of list items
        };
        this.addItem = this.addItem.bind(this); // `this` in addItem points to this List
        this.deleteItem = this.deleteItem.bind(this); // `this` in deleteItem points to this List
        this.dispDate = this.dispDate.bind(this); // `this` in dispDate points to this List
    }

    // add item event handler
    addItem(e) {

        e.preventDefault(); // block reloading the page

        if (this._inputElement.value !== "") {

            // make the new item and add it
            let newItem = null;
            if (this.state.perishable) {
                // if perishable, there is a date
                newItem = {
                    text: this._inputElement.value, // item name
                    key: Date.now(), // make unique key
                    date: this.date.value, // item expiry date
                    perishable: this.state.perishable // whether or not item expiry date is ignored
                };
                // get today's date and time in the correct string format
                let today = new Date();
                let currentDate = today.getFullYear() + "-"
                    + ((today.getMonth() < 10)?"0":"") + (today.getMonth()+1) + "-"
                    + ((today.getDate() < 10)?"0":"") + today.getDate() + "T"
                    + ((today.getHours() < 10)?"0":"") + today.getHours() + ":"
                    + ((today.getMinutes() < 10)?"0":"") + today.getMinutes();
                // prevent past reminders
                if (newItem.date <= currentDate) {
                    alert("Please enter a valid date and time");
                }
                else {
                    // add and sort by date
                    this.setState((prevState) => {
                        let x = prevState.items.concat(newItem);
                        return {
                            items: x.sort((a, b) => (a.date > b.date) ? 1 : -1)
                        };
                    });
                }
            }
            else {
                // if non-perishable, date is null, so don't access it
                newItem = {
                    text: this._inputElement.value, // item name
                    key: Date.now(), // make unique key
                    perishable: this.state.perishable // whether or not item expiry date is ignored
                };
                // add unsorted
                this.setState((prevState) => {
                    return {
                        items: prevState.items.concat(newItem)
                    };
                });
            }
            
            // empty the input text box
            this._inputElement.value = "";
        }
        else { // if user enters empty item
            alert("Please type in the input box");
        }

        console.log(this.state.items);
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

    dispDate() {

        if (this.state.perishable) {
            
            return <div><input type="datetime-local" ref={(a) => this.date = a}></input></div>
        }
        return null;
    }

    render() {
        return(
            <div className="ListMain">
                {/* display the list header */}
                <h2>{this.state.listName}</h2> {/* name of the list */}

                <form onSubmit={this.addItem}> {/* add list item on submit */}
                    {/* text input box */}
                    <input
                        ref={(a) => this._inputElement = a}
                        placeholder={this.state.itemName}> 
                    </input>
                    <br/>
                    {/* expiry date input box */}
                    <this.dispDate></this.dispDate>
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