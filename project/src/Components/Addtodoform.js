import React, {Component} from 'react';

class Addtodoform extends Component {
    state = {};

    saveTodo = () => {
        const todo = {
            description: this.state.description,
            date: this.state.date,
            todoId: Math.floor(Math.random() * 10000000),
            status: 'Pending',
        };

        this.props.addTodo(todo);
        this.setState({description: '', date: ''});
    };

    render() {
        return (
            <div>
                Enter Description:
                <input
                    type="text"
                    placeholder="Enter Todo Description"
                    onChange={(event) => this.setState({description: event.target.value})}
                    value={this.state.description}
                />
                Enter Date:
                <input
                    type="date"
                    placeholder="Enter Todo Date"
                    onChange={(event) => this.setState({date: event.target.value})}
                    value={this.state.date}
                />
                <button onClick={this.saveTodo}>Save</button>
            </div>
        );
    }
}

export default Addtodoform;
