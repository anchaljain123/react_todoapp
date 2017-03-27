/**
 * Created by anchal on 25/3/17.
 */

import React from 'react'
import Todoapp from './Todoapp'

import {BrowserRouter as Router, Link, Route, Redirect, withRouter} from 'react-router-dom'
export default class Afterlogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3> Hello {this.props.match.params.name} </h3>

                <Router>

                    <div>
                        <Redirect to='/todoapp'/>
                        <Route path="/todoapp" render={
                            props => (
                                <Todoapp {...props}
                                         usertodo={this.props.usertodo}
                                         updateUserTodo={this.props.updateUserTodo}
                                         addUserTodo={this.props.addUserTodo}

                                />)
                        }/>

                    </div>
                </Router>
            </div>
        )
    }
}