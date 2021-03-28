import React, { Component } from "react";
import Items from "./Items";
import "./List.css"

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: this.props.listName, //e.g. "Reminders"
            itemName: this.props.itemName, //e.g. "reminder"
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            const newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        else {
            alert("Please type in the input box");
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return(
            <div className="ListMain">
                <h2>{this.state.listName}</h2>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                           placeholder={this.state.itemName}>
                    </input>
                    <button type="submit">Add</button>
                </form>
                <Items entries={this.state.items}
                           delete={this.deleteItem}/>
            </div>
        );
    }
}

export default List;