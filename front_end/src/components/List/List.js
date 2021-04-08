import React, { Component } from "react";
import Items from "./Items";
import "./List.css";
import {bake_cookie, read_cookie} from "sfcookies";

// The List functionality
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uniqueName: this.props.uniqueName, // List object's unique string identifier for cookies
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

        const oldList = read_cookie(this.state.uniqueName); // read current list of items from cookie
        let newList = null; // declare new list which will contain the new added item
        e.preventDefault(); // block reloading the page

        if (this._inputElement.value !== "") {

            // make the new item
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
                    newList = oldList.concat(newItem); // add new item to end of list
                    newList.sort((a, b) => (a.date > b.date) ? 1 : -1); // sort the list by date
                    // set the next state to use the updated list of items
                    this.setState({
                            items: newList
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
                newList = oldList.concat(newItem); // add new item to end of list
                // set the next state to use the updated list of items
                this.setState({
                        items: newList
                });
            }

            bake_cookie(this.state.uniqueName, newList); // make new cookie with updated list of items
            this._inputElement.value = ""; // empty the input text box
        }
        else { // if user enters empty item
            alert("Please type in the input box");
        }

        console.log("added", newList);
    }

    // delete item event handler
    deleteItem(key) {

        // read current list from cookie
        const oldList = read_cookie(this.state.uniqueName);

        // make new list of items filtering out the deleted item by its key
        const filteredItems = oldList.filter(item => (item.key !== key));

        this.setState({
            items: filteredItems // set the new state to use the new filtered list of items
        });

        bake_cookie(this.state.uniqueName, filteredItems); // make new cookie with updated list of items

        console.log("deleted", filteredItems);
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
                <Items entries={read_cookie(this.state.uniqueName)} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default List;