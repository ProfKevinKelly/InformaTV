import React, { Component } from "react";
//import FlipMove from "react-flip-move"; // npm i -S react-flip-move

class Items extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                   key={item.key}>{item.text}</li>
    }

    render() {
        const Entries = this.props.entries;
        const listItems = Entries.map(this.createTasks);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default Items;