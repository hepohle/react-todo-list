import React, { Component } from 'react'
import Item from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h3>todo list</h3>
                <Item />
            </div>
        )
    }
}
