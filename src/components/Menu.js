import React, { Component } from 'react'
import dishes from './dishes.json'

export default class Menu extends Component {
    render() {
        return (
            <>
                <div className="question">
                    <hr />
                    <p><b>Q2. Create a class component that displays a menu from dishes.json (provided with assignment). The
                        file must be imported into the component and should display dishes, with images, comments and
                        ratings. (images are not included but add images with the sources regardless).
                    </b></p>
                </div>
                <div className='row answer'>
                    {dishes.map((dish) => {
                        return (
                            <div className='col' key={dish.id}>
                                <div className="card" style={{ width: 18 + "rem" }}>
                                    <img style={{ height: "18rem", width: "18rem" }} className="card-img-top" src={dish.image} alt="Card food cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{dish.name}</h5>
                                        <p className="card-text">{dish.description}</p>
                                        <div> <b> Category: </b> {dish.category} </div>
                                        <div><b> Label: </b> {dish.label}</div>
                                        <div><b> Price: </b> {dish.price} </div>
                                    </div>

                                    {dish.comments.map((comment) => {
                                        return (
                                            <ul className="list-group list-group-flush" key={comment.id}>
                                                <li className="list-group-item"><b>Rating:</b> {comment.rating}</li>
                                                <li className="list-group-item">Comment: {comment.comment}</li>
                                                <li className="list-group-item">Author: {comment.author}</li>
                                                <li className="list-group-item">Date: {comment.date}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                                <div>

                                </div>
                            </div>
                        )
                    })}
                </div >
            </>
        )
    }
}
