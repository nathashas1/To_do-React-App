import React from 'react';
import TodoItem from './todo_item.js';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      todos:[],
      showForm: false,
      newTodo: ""
     }
     this.handleClick = this.handleClick.bind(this)
     this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){

    }

    handleClick() {
        console.log("he")
        if (this.state.showForm === false) {
          this.setState({showForm: true})
        } else {
          let newTodo = this.state.newTodo
          this.setState({showForm: false})
          this.setState({ todos: [...this.state.todos, newTodo] })
        }
    }

    handleChange(e) {
      let newTodo = e.target.value
      this.setState({newTodo})
    }



    render() {
      let todos = (this.state.todos).map((todo,i) => {
      return (
        <TodoItem
          key={i}
          todo={todo}
          right={"yes"}
          container={"todo"}
        />
      );
    });

      return (
        <div>
          <h1>Things to do</h1>
          {todos}
          {this.state.showForm ? <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
          /> : null}
          <div className="" onClick={this.handleClick}>Add Card</div>
        </div>
      )
    }

  }

    export default Todo;
