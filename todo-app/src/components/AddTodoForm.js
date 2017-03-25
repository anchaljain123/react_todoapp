import React, { Component } from 'react';

class AddTodoForm extends Component {
    state = {};

    saveTodo = () => {
        const todo = {
            description: this.state.description,
            id: Math.floor(Math.random()*10000000),
            status: 'pending',
        };

        this.props.addTodo(todo);
        this.setState({ description: '' });
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter Todo"
                    onChange={(e) => this.setState({ description: e.target.value })}
                    value={this.state.description}
                />
                <button onClick={this.saveTodo}>Save</button>
            </div>
        );
    }
}

export default AddTodoForm;