import React, { PureComponent } from "react";
import "./TodoApp.css";
import EditPopup from "./EditPopup"; // imporing component from same folder

//Pure component instead of component avoids unnessary rendering
export default class TodoApp extends PureComponent {
  state = {
    input: "",
    items: [],
    showPopup: false,
    showPopups: [],
  };

  //Keep the input state uptodate as i type in the input box
  handlChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault(); //To avoid the usual form reloading while due to submit click
    this.hideAllPopuls();

    // const temp=this.state.items
    // temp.push(this.state.input)

    if (this.state.input !== "") {
      //We only need to add if user enters a non empty string

      this.setState(
        {
          // items:temp
          items: [...this.state.items, this.state.input],
          input: "",
        },
        () => {
          console.log(this.state.items);
        }
      );
    }
  };

  //Only fileter out the without this key, to get it removed
  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => {
        return index !== key;
      }),
    });
  };

  //change the value at a specific index(key) to val
  editItem = (event, key, val) => {
    event.preventDefault();

    console.log("Key and value is ");
    console.log(key);
    console.log(val);

    var itemsCopy = [...this.state.items];
    itemsCopy[key] = val;

    this.setState({
      items: itemsCopy,
    });

    this.hideAllPopuls();
  };

  //Set all elements of show popup array as false
  hideAllPopuls = () => {
    var itemsCopy = [...this.state.showPopups];
    console.log(itemsCopy);
    itemsCopy.map((data, index) => (itemsCopy[index] = false));
    console.log(itemsCopy);
    this.setState({
      showPopups: itemsCopy,
    });
  };

  //Set the show popup of that particular index to true
  showPopup = (index) => {
    this.hideAllPopuls();
    var itemsCopy = [...this.state.showPopups];
    itemsCopy[index] = true;
    this.setState({
      showPopup: true,
      showPopups: itemsCopy,
    });
  };

  render() {
    const { input } = this.state;

    return (
      <div className="todo-container">
          
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <input
            type="text"
            value={this.state.input}
            onClick={this.hideAllPopuls}
            onChange={this.handlChange}
            placeholder="Enter Items..."
          />
        </form>

        <ul>

          {this.state.items.map((data, index) => (
            <li key={index}>
              {data}
              <div className="itemButtons">
                <i
                  className="fas fa-edit"
                  onClick={() => this.showPopup(index)}
                ></i>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </div>
              
              {/* Show the edit popup, if the flag is true,Else && second part wont execute */}
              {/* {{ double braces i think because here we pass a funciton and a value, both inside a single object {}  */}
              {this.state.showPopups[index] && (<EditPopup data={{ editItem: this.editItem.bind(this), key: index }}
                />
              )}           
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

//Since inital value of input is empty it displays the placeholder value
