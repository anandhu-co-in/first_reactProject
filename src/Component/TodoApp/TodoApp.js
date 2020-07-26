import React, { Component } from 'react'
import "./TodoApp.css"
import EditPopup from './EditPopup';

export default class TodoApp extends Component {


    state={
        input:"",
        items:[],
        showPopup:false,
        showPopups:[]
    }


    handlChange=(event)=>{
        this.setState({
            input :  event.target.value
        });
    }

    storeItems=(event)=>{
        event.preventDefault();
        this.hideAllPopuls()

        // const temp=this.state.items
        // temp.push(this.state.input)

        if(this.state.input!==""){ //We only need to add if user enters a non empty string

            this.setState({
                // items:temp
                items:[...this.state.items,this.state.input],
                input:""
            },()=>{
                console.log(this.state.items)
            });
        }

        

    }

    deleteItem=(key)=>{

        
        this.setState({
            items:this.state.items.filter((data,index)=>{
                return index!==key
            })
        })

    }

    editItem=(event,key,val)=>{

        event.preventDefault();

        console.log("Key and value is " )
        console.log(key)
        console.log(val)

        var itemsCopy=[...this.state.items];
        itemsCopy[key]=val

        this.setState({
            items:itemsCopy
        })

        this.hideAllPopuls();
        
    }


    hideAllPopuls=()=>{
        var itemsCopy=[...this.state.showPopups];
        console.log(itemsCopy);
        itemsCopy.map((data,index)=>(
            
            itemsCopy[index]=false
        ));
        console.log(itemsCopy);
        this.setState({
            showPopups:itemsCopy
        })

    }


    showPopup=(index)=>{
        this.hideAllPopuls();
        var itemsCopy=[...this.state.showPopups];
        itemsCopy[index]=true
        this.setState({
            showPopup:true,
            showPopups:itemsCopy
        })
    }

    
    render() {

        const {input}=this.state;

        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>TodoApp</h1>
                    <input type="text" value={this.state.input} onClick={this.hideAllPopuls} onChange={this.handlChange} placeholder="Enter Items..."/>
                </form>
                <ul>
                        {this.state.items.map((data,index)=>(
                            <li key={index}>
                                {data}
                                <div className="itemButtons">
                                    <i className="fas fa-edit" onClick={()=>this.showPopup(index)}></i>
                                    <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i>
                                </div>
                                {this.state.showPopups[index] && <EditPopup data={{editItem:this.editItem.bind(this),key:index}}/>}
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}


//Since inital value os input is empty it displays the placeholder value