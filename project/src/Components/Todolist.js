/**
 * Created by anchal on 25/3/17.
 */
import React from 'react'
import Todo from './Todo'
class Todolist extends  React.Component{
    constructor(){
        super();
    }

    render(){
        const { todos } = this.props;
        return(
            <div>
                {
                    todos.map((item, i) => //we will start printing todos which were only in structure till now
                    ( <Todo key={i} todo={item} editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo} /> ))
                }
            </div>
        )
    }



}
export default Todolist;