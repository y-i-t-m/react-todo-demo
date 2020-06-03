import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deleteTodo, todos } = this.props;
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          {todo.id} {todo.title}
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            削除
          </button>
        </li>
      );
    });

    return (
      <div>
        <h3>追加したリスト一覧</h3>
        <ul>{list}</ul>
      </div>
    );
  }
}
