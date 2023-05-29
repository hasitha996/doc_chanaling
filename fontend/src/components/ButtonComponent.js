import React, { Component } from 'react'
import '../style/ButtonComponent.scss';

 class ButtonComponent extends Component {
    render() {
        return (
            <div>
                <button  className="btn-orange" type="submit">SUBMIT</button>
            </div>
        )
    }
}



export default ButtonComponent;
