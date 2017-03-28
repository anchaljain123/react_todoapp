/**
 * Created by anchal on 25/3/17.
 */
import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Addtodoform from './Addtodoform'
import Todolist from './Todolist'
import Logout from './Logout'
export default class Todoapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: props.usertodo,
        }
    }

    ComponentWillReceiveProps(props) {
        this.setState({
            todos: props.usertodo,
        });
    }


    addTodo = (todo) => {

        let {usertodo} = this.props;
        let todos = [...this.state.todos];//updated on state level
        todos = [...todos, todo];
        this.setState({todos});
        this.props.addUserTodo(todo); //to edit on props
    };

    editTodo = (todo) => {
        console.log('todo', todo)
        let todos = [...this.state.todos];
        let todoToEdit = todos.find((todoTemp) => (todoTemp.id === todo.id));
        todoToEdit = todo;
        this.setState({todos});
        this.props.updateUserTodo(todo);

    }

    deleteTodo = (todo) => {

        let todos = [...this.state.todos];
        let index = todos.findIndex((todoTemp) => (todoTemp.id === todo.id));
        todos.splice(index, 1);
        this.setState({todos});
        this.props.updateUserTodo(todo);
    }

    render() {
        return (
            <div>
                <section className="success" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>TOdo</h2>
                                <hr className="star-light"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-lg-offset-5">
                                <input type="button" value="ADD" className="btn btn-primary" onClick={() => {
                                    this.setState({add: !this.state.add})
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-lg-offset-4">
                                <div >

                                    { this.state.add ? <Addtodoform addTodo={this.addTodo}/> : <span />}
                                </div>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8  col-lg-offset-2">
                                <div>

                                    <Todolist todos={this.state.todos} editTodo={this.editTodo}
                                              deleteTodo={this.deleteTodo}/>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}