import React, { Component } from 'react'
import {savePosts} from '../actions/postAction'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../style/ButtonComponent.scss'

 class ButtonComponent extends Component {
    render() {
        return (
            <div>
                <button  className="btn-orange" onClick={()=>this.props.savePosts()}>SUBMIT</button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch){
 return bindActionCreators({savePosts: savePosts},dispatch)
}

export default connect(null,matchDispatchToProps)(ButtonComponent)
