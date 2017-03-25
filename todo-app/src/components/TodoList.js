import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (
            <div>
                {
                    todos.map((todo, i) => (
                        <Todo key={i} todo={todo}  editTodo={this.props.editTodo} />
                    ))
                }
            </div>
        );
    }
}

export default TodoList;
