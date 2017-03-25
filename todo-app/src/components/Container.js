import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


class Container extends Component {
    state = {
        todos: []
    };

    addTodo = (todo) => {
        let todos = [ ...this.state.todos ];
        todos = [ ...todos, todo ];
        this.setState({ todos });
    };

    editTodo = (todo) => {
        let todos = [...this.state.todos];
        let todoToEdit = todos.find((todoTemp) => (todoTemp.id === todo.id));
        todoToEdit = todo;
        this.setState({ todos });
    };

    render() {
        return (
            <div>
                <AddTodoForm addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} editTodo={this.editTodo} />
            </div>
        );
    }
}

export default Container;
