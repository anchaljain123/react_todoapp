
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

       // let { todo } = this.props;
        const { description , date  } = this.state;
       /* todo.description = description; //passing reference
        todo.date = date;*/

       let todoobj={
           description,
           date,
       }
       this.setState({todoobj});
        this.props.editTodo(todoobj); //to edit on props
        this.setState({ edit: false });
    };

    changeStatus = () => {

        let { todo } = this.props;
        todo.status = todo.status === 'done' ? 'pending' : 'done';
        this.props.editTodo(todo);
    };

    render(){
        return(
            <div>


                {
                    this.state.edit ?
                        <div>
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
                            <span>{this.state.description}</span>
                            <span>{this.state.date}</span>
                            <span>{this.state.status}</span>
                            <input type="checkbox" checked={status === 'done'} onClick={this.changeStatus}/>
                           <button onClick={() => this.props.deleteTodo(this.state)}>Delete</button>
                            <button onClick={ () => this.setState({ edit: !this.state.edit })}>Edit</button>
                        </div>

                }

            </div>
        )
    }
}

export default Todo;
