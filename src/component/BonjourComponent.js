import React, { Component } from 'react'

class Bonjour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gras : false
        }

        this.toggleGras = this.toggleGras.bind(this)
    }

    toggleGras() {
        this.setState({
            gras : !this.state.gras
        })
    }


    render() {
        return(
            <div className='container'>
                <p className= 'mt-4' style = {{fontWeight: this.state.gras ? 'bold': 'normal'}} onClick={this.toggleGras}>
                    Bonjour a {this.props.presentation.prenom} {this.props.presentation.nom}
                </p>
            </div>
        )
    }
}

export default Bonjour