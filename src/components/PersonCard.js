import React, { Component } from "react";

class PersonCard extends Component {
    //  //// CONSTRUCTOR //////////////////////////////////////////
    constructor(props) {
        super(props);
        this.firstName = this.props.firstName;
        this.lastName = this.props.lastName;
        this.age = this.props.age;
        this.hairColor = this.props.hairColor;
    }

    render() {

        return (
            <div>
                <h1>{this.lastName}, {this.firstName}</h1>
                <p>Age: {this.age}</p>
                <p>Hair Color: {this.hairColor}</p>
            </div>
        );
    }



}

export default PersonCard;