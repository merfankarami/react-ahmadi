import React, { Component } from "react";
import Input from './Input';

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
    };
  }
  

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  buttonSubmit = () => {
    console.log("clicked");
    if (this.state.inputValue !== "") {// validation
      this.setState({
        todos: [this.state.inputValue, ...this.state.todos],
        inputValue: "", // this will clear the input field once item added
      });
      console.log("inputValue after click", this.state.inputValue);
      console.log("todos after click", this.state.todos);
    }
  };

  delHandler = (index) => {
    // console.log("deleted", index);
    let list = this.state.todos;
    list.splice(index, 1);
    this.setState({ todos: list });
    console.log("todos after remove", this.state.todos);
  }

  render() {
    return (
      <div>
        <Input
          change={this.inputChange}
          vallue={this.state.inputValue}
        />
        <button onClick={this.buttonSubmit}>Add task</button>
        <ol>
          {this.state.todos.map((todo, index) => (
            <li key={index}><button onClick={this.delHandler}>del</button>{todo}</li>
          ))}
        </ol>
      </div>
    );
  }
}
