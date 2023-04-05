import React, { Component } from 'react'

export default class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
        this.onChangeFunc = this.onChangeFunc.bind(this)
    }
    onChangeFunc(event) {
        this.setState({
            text: event.target.value
        })
    }
    render() {
        const { items } = this.props
        const { text } = this.state

        const filteredItems = items.filter((name) => name.toLowerCase().startsWith(text.toLowerCase()))

        return (
            <div>
                <div className="container question">
                    <p><b>Q1. Create a class component that renders a search input and below it, a list of names (received from
                        “names” prop as an array of strings). Typing in the search box should filter the names displayed in
                        the list.</b></p>
                </div>
                <div className="answer">
                    <div className="row justify-content-center">
                        <div className="col-4 col-6">
                            <input className="form-control me-2" type="search" placeholder="Search" value={text} onChange={this.onChangeFunc} aria-label="Search" />

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4 col-6">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Names</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredItems.map((name, index) => (
                                        <tr key={index}>
                                            <td>{name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
