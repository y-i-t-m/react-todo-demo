import React from "react";
import { AddTodo } from "./components/addTodo";
import { List } from "./components/list";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Todoリスト</h2>
        <AddTodo addTodo={this.addTodo} />
        <List
          deleteTodo={this.deleteTodo}
          doneTodo={this.doneTodo}
          todos={todos}
        />
      </div>
    );
  }

  addTodo = title => {
    const { todos, nextId } = this.state;
    this.setState({
      todos: [...todos, { id: nextId + 1, title: title }],
      nextId: nextId + 1
    });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };

  doneTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
