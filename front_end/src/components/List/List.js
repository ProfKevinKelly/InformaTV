import React, { Component } from "react";
import Items from "./Items";
import "./List.css";
import {bake_cookie, read_cookie} from "sfcookies";
import Select from 'react-select';

// The List functionality
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uniqueName: this.props.uniqueName, // List object's unique string identifier for cookies
            listName: this.props.listName, // list name prop e.g. "Reminders"
            itemName: this.props.itemName, // item name prop e.g. "reminder"
            isReminder: this.props.isReminder, // true if items are reminders, false if items are people
            items: [], // array of list items
        };
        this.addItem = this.addItem.bind(this); // `this` in addItem points to this List
        this.deleteItem = this.deleteItem.bind(this); // `this` in deleteItem points to this List
        this.remInput = this.remInput.bind(this); // `this` in dispDate points to this List
        this.pepInput = this.pepInput.bind(this);
    }

    // add item event handler
    addItem(e) {

        let oldList = read_cookie(this.state.uniqueName); // read current list of items from cookie
        if(oldList === null) {
            oldList = []; // empty list if no cookie
        }
        let newList = null; // declare new list which will contain the new added item
        e.preventDefault(); // block reloading the page
        let newItem = null; // make the new item

        if (this.state.isReminder) { 
            if (this.inputCategory.value !== "" && this.inputText.value !== "" && this.inputTitle.value !== "") {
                // if reminder
                newItem = {
                    key: Date.now(), // make unique key
                    text: this.inputText.value,
                    title: this.inputTitle.value,
                    category: this.inputCategory.value,
                    date: this.inputDate.value,
                    preDate: this.inputPreDate.value,
                    isReminder: true
                };
                // get today's date and time in the correct string format
                let today = new Date();
                let currentDate = today.getFullYear() + "-"
                    + ((today.getMonth() < 10)?"0":"") + (today.getMonth()+1) + "-"
                    + ((today.getDate() < 10)?"0":"") + today.getDate() + "T"
                    + ((today.getHours() < 10)?"0":"") + today.getHours() + ":"
                    + ((today.getMinutes() < 10)?"0":"") + today.getMinutes();
                // prevent invalid reminders
                if (newItem.date <= currentDate || newItem.preDate <= currentDate || newItem.preDate >= newItem.date) {
                    alert("Please enter two valid dates");
                }
                else {
                    newList = oldList.concat(newItem); // add new item to end of list
                    newList.sort((a, b) => (a.date > b.date) ? 1 : -1); // sort the list by date
                    // set the next state to use the updated list of items
                    this.setState({
                            items: newList
                    });
                    // empty input boxes
                    this.inputText.value = "";
                    this.inputCategory = null;
                    this.inputDate.value = "";
                    this.inputTitle.value = "";
                    this.inputPreDate.value = "";
                }
            }
            else {
                alert("Please enter Reminder title, text and category!");
            }
        }
        else {
            if (this.inputText.value !== "" && this.inputRelation.value !== "" && this.inputEmail.value !== "" && this.inputPhone.value !== "") {
                // if person
                newItem = {
                    key: Date.now(), // make unique key
                    text: this.inputText.value,
                    relation: this.inputRelation.value,
                    email: this.inputEmail.value,
                    phone: this.inputPhone.value,
                    isReminder: false
                };
                newList = oldList.concat(newItem); // add new item to end of list
                // set the next state to use the updated list of items
                this.setState({
                        items: newList
                });
                // empty input boxes
                this.inputText.value = "";
                this.inputRelation.value = "";
                this.inputEmail.value = "";
                this.inputPhone.value = "";
            }
            else {
                alert("Please enter a name, relation, email address and phone number!")
            }
        }
        bake_cookie(this.state.uniqueName, newList); // make new cookie with updated list of items

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

    // display reminder input fields
    remInput() {

        if (this.state.isReminder) {
            // dropdown categories
            const categories = [
                {value: 'General', label: 'General'},
                {value: 'Urgent', label: 'Urgent'},
                {value: 'Routine', label: 'Routine'}
            ]
            // some basic custom styles to make dropdown menu more readable
            const customStyles = {
                option: (provided, state) => ({
                  ...provided,
                  borderBottom: '1px dotted pink',
                  color: state.isSelected ? 'orange' : 'blue',
                  padding: 10,
                })
            }
            // the input fields
            return <div>
                <input
                    ref={(a) => this.inputTitle = a}
                    placeholder="Reminder Title"> 
                </input>
                <br/>
                <input
                    ref={(a) => this.inputText = a}
                    placeholder="Reminder Text"> 
                </input>
                <br/>
                <Select 
                    className="dropdown"
                    options={categories}
                    placeholder="Reminder Category"
                    styles={customStyles}
                    isSearchable={false}
                    onChange={(a) => this.inputCategory = a}
                    value={this.inputCategory}>
                </Select>
                <p>Due:</p>
                <input 
                    type="datetime-local"
                    ref={(a) => this.inputDate = a}>
                </input>
                <br/>
                <p>Remind me early on:</p>
                <input
                    type="datetime-local"
                    ref={(a) => this.inputPreDate = a}>
                </input>
            </div>
        }
        return null;
    }

    // display person input fields
    pepInput() {

        if (this.state.isReminder === false) {
            
            return <div>
                <input
                    ref={(a) => this.inputText = a}
                    placeholder="Name"> 
                </input>
                <br/>
                <input
                    ref={(a) => this.inputRelation = a}
                    placeholder="Relation to the elder"> 
                </input>
                <br/>
                <input
                    ref={(a) => this.inputEmail = a}
                    placeholder="Email Address"> 
                </input>
                <br/>
                <input
                    ref={(a) => this.inputPhone = a}
                    placeholder="Phone Number"> 
                </input>
            </div>
        }
        return null;
    }

    render() {
        let theList = read_cookie(this.state.uniqueName); // read current list of items from cookie
        if(theList === null) {
            theList = []; // empty list if no cookie
        }
        return(
            <div className="ListMain">
                {/* display the list header */}
                <h2>{this.state.listName}</h2> {/* name of the list */}

                <form onSubmit={this.addItem}> {/* add list item on submit */}
                    {/* choose input fields */}
                    <this.remInput></this.remInput>
                    <this.pepInput></this.pepInput>
                    {/* add button */}
                    <button type="submit">Add</button>
                </form>

                {/* display the list items */}
                <Items entries={theList} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default List;