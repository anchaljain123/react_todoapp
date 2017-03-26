/**
 * Created by anchal on 25/3/17.
 */
import React,{ Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Addtodoform from './Addtodoform'
import Todolist from './Todolist'
import Logout from './Logout'
export default class Todoapp extends Component{
    constructor(){
            super();
            this.state = {
                todos: [],
            }
    }
    addTodo = (todo) => {

        let todos = [ ...this.state.todos ]; //didnt get it
        todos = [ ...todos, todo ];
        this.setState({ todos });
        console.log("===============todos",todos);
    };

    editTodo =(todo) => {

        let todos = [ ...this.state.todos ];
        let todoToEdit = todos.find((todoTemp) => (todoTemp.id === todo.id));
        todoToEdit = todo;
        this.setState({ todos });

    }

    deleteTodo = (todo) => {
        //let todos = [ ...this.state.todos ];
        let { todos } = this.state ;
        /*todos.splice(todo,1);
        this.setState({todos});*/
    }

    logout =() =>{

        let todos = [ ...this.state.todos ];
        loginuser.todolist=todos;
    }

    render(){
        return(
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/logout"></Link></li>
                        </ul>

               <Addtodoform addTodo={this.addTodo}/>
                <Todolist todos={this.state.todos} editTodo={this.editTodo} deleteTodo={this.deleteTodo} />
                    </div>
                    <Route path="/logout" render={props => (<Logout {...props} logout={this.logout}/>)}/>
                </Router>
            </div>
        )
    }
}