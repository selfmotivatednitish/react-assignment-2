import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: props.todo.done ? "disabled" : ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(item, event) {
        if (!item.done && this.state.disabled === "") {
            this.setState({
                disabled: "disabled"
            }, () => this.props.action(item, event))
        }
    }

    render() {
        const { todo } = this.props

        return (
            <div className="row container justify-content-center">
                <div className='col-6' style={{ display: this.state.display }}>
                    <div>
                        <span>{todo.text}</span>
                    </div>
                    <div>
                        <button type="button" disabled={this.state.disabled} className="btn btn-sm btn-outline-success my-1 mx-3" onClick={(event) => this.handleClick(todo, event)}>
                            Mark as complete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
