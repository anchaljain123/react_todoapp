import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        const { description, status } = props.todo;
        this.state = {
            description,
            status,
        };
    }

    componentWillReceiveProps(props) {
        const { description, status } = props.todo;
        this.setState({
            description,
            status,
        });
    }

    changeStatus = () => {
        let { todo } = this.props;
        todo.status = todo.status === 'done' ? 'pending' : 'done';
        this.props.editTodo(todo);
    };

    saveChanges = () => {
        let { todo } = this.props;
        const { description } = this.state; //updated on state level
        todo.description = description;
        this.props.editTodo(todo); //to edit on props
        this.setState({ edit: false })
    };

    render() {
        const { description, status } = this.state;
        return (
            <div>
                <span>
                    {
                        this.state.edit ? (
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => {this.setState({ description: e.target.value })}}
                                />
                            ) : (
                                <span>{description}</span>
                            )
                    }
                </span>
                <span>
                    {
                        this.state.edit ? (
                                <button onClick={this.saveChanges}>Save</button>
                            ) : (
                                <input
                                    type="checkbox"
                                    checked={status === 'done'}
                                    onClick={this.changeStatus}
                                />
                            )
                    }
                </span>
                <span onClick={() => this.setState({ edit: !this.state.edit })}>Edit</span>
            </div>
        );
    }
}

export default Todo;
