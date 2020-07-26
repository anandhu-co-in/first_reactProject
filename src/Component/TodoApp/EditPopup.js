import React, { Component } from 'react'
import "./EditPopup.css"

export default class EditPopup extends Component {


    state={
        editInput:""
    }

    
    handlChange=(event)=>{
        this.setState({
            editInput :  event.target.value
        });
    }

    render() {
        return (
            <form className="EditPopup" onSubmit={(e)=>this.props.data.editItem(e,this.props.data.key,this.state.editInput)}>
                <input type="text" value={this.editInput} placeholder="Enter New Value..." onChange={this.handlChange}></input>
            </form>
        )
    }
}
