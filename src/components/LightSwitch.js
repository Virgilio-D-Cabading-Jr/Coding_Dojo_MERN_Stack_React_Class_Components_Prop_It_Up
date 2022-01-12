////////////////////////////////////////////////////
// Light Switch JS
////////////////////////////////////////////////////

import React, { Component } from 'react';
                
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }
    
    render() {
        return (
            <div>
                <p>The light is currently { this.state.position }</p>
                <br />
                <button onClick={ this.flipSwitch }>Flip Switch</button>
            </div>
        );
    }

    flipSwitch = () => {
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }
}
                
export default LightSwitch;