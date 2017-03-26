/**
 * Created by anchal on 25/3/17.
 */
import React from 'react'

class Todo extends  React.Component{
    constructor(props){
        super(props);
        const { description , date , status } = props.todo;
        this.state = {
            description,
            status,
            date,
        };
    }

    componentWillReceiveProps(props) {
        const { description, date, status } = props.todo;
        this.setState({
            description,
            status,
            date,
        });
    }

    saveChanges = () => {

        let { todo } = this.props;
        const { description , date  } = this.state; //updated on state level
        todo.description = description;
        todo.date = date;
        this.props.editTodo(todo); //to edit on props
        this.setState({ edit: false }); //little doubt //if not done den saveupdate utton will not get hidden nd no row created
    };

    changeStatus = () => {

        let { todo } = this.props;//how can we mutate props //it means its own state which is a prop actually
        todo.status = todo.status === 'done' ? 'pending' : 'done';
        this.props.editTodo(todo);
    };

    render(){
        return(
            <div>


                {
                    this.state.edit ?
                        <div>
                            <h4> {this.state.edit}</h4>
                        <input
                            type="text"
                            placeholder="Enter Description"
                            value={this.state.description}
                            onChange={(event) => this.setState({ description: event.target.value })}
                        />
                         <input type="date"
                                value={this.state.date}
                                onChange={ (event) => this.setState({ date: event.target.value })}
                         />
                         <button onClick={this.saveChanges}>Save Updates</button>
                        </div>
                        :
                        <div>
                            <h4> {this.state.edit}</h4>
                            <span>{this.state.description}</span>
                            <span>{this.state.date}</span>
                            <span>{this.state.status}</span>
                            <input
                                type="checkbox"
                                checked={status === 'done'}
                                onClick={this.changeStatus}
                            />
                            <button onClick={this.props.deleteTodo(this.state)}>Delete</button>
                        </div>

                }
                <h4> {this.state.edit}</h4>
                <button onClick={ () => this.setState({ edit: !this.state.edit })}>Edit</button>

            </div>
        )
    }
}

export default Todo;