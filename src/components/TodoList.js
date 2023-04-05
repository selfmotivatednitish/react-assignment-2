import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

    onItemClick(todo,  event) {
        console.log(event)
        if (!todo.done)
            alert(`${todo.text} completed`)
    }

    render() {
        const { items } = this.props
        return (
            <div>
                <div className="question">
                    <hr />
                    <p><b>Q3. Write a TodoList component that expects an items prop which is a list of objects, each with text
                        and done properties. TodoList also accepts an onItemClick function prop, which should be called
                        when a user clicks an item in the list, if the item is not marked as done. Otherwise, the onItemClick
                        should not be called and the click event itself should not be propagated further. The function should
                        be called with the item object from the items list as the first parameter and the event as the second
                        parameter</b></p>
                </div>
                <div className="answer">
                    {items.map((item, index) => {
                        return <TodoItem key={index} todo={item} action={this.onItemClick} />
                    })}
                </div>
            </div>
        )
    }
}
