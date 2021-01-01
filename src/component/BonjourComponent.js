import React, { Component } from 'react'

class Bonjour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gras : false
        }
    }


    render() {
        return(
            <div className='container'>
                <p className= 'mt-4' style = {{fontWeight: this.state.gras ? 'bold': 'normal'}}>
                    Bonjour a {this.props.presentation.prenom} {this.props.presentation.nom}
                </p>
            </div>
        )
    }
}

export default Bonjour