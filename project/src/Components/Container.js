/**
 * Created by anchal on 25/3/17.
 */

import React,{Component} from 'react'
import {BrowserRouter as Router, Link, Route, Redirect, withRouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Signup from './Signup'
import Login from './Login'
import Afterlogin from './Afterlogin'

export default class Container extends  Component {
    constructor(){
        super();
        this.state = {
            loginuser:'',
            loginusertodo: '',
            isAuthenticated: false,
            iserr: false,
            userlist: [],
        }
    }

    addUser = (user) =>{

        let { userlist } =this.state;
        userlist = [ ...userlist, user ];
        this.setState({ userlist });
        console.log(userlist,'*************userlist')
    }

    authenticateUser = (logindetails) =>{
        let { userlist } = this.state;
        let { name,pwd } = logindetails;

        let matchUser = userlist.find((uservalue) => (uservalue.name === name && uservalue.pwd === pwd ));
        if(matchUser != undefined){
            console.log('authenticated user');
            this.setState({
                loginuser: matchUser.name,
                loginusertodo:matchUser.todolist,
                isAuthenticated: !this.state.isAuthenticated,
            })
        }
        else {
            console.log('not authenticated');
            this.setState({ iserr: !this.state.iserr })
        }

    }

     render(){
        return(
            <div>
                <Router>
                    <div>
                        <nav className="navbar">
                            <ul>
                                <li ><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/signup">Signup</Link></li>
                                <li ><Link to="/login">Login</Link></li>

                            </ul>
                        </nav>

                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/signup" render={props => (<Signup {...props} addUser={this.addUser}/>)}/>
                        <Route path="/login" render={props => (<Login {...props} authenticateUser={this.authenticateUser}/>)}/>

                        { this.state.isAuthenticated ?
                            <div>

                                <Redirect to={`/afterlogin/${this.state.loginuser}`}/>
                                <Route
                                    path="/afterlogin/:name"
                                    render={props => (<Afterlogin {...props} usertodo={this.state.loginusertodo}/>)}
                                />
                            </div> : ""
                        }

                        { this.state.iserr ? <p> Incorrect UserName or Password </p> : ""}

                    </div>
                </Router>



            </div>
        )
    }
}