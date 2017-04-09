/**
 * Created by anchal on 25/3/17.
 */
/**
 * Created by anchal on 23/3/17.
 */
import React, { Component } from 'react';


import {BrowserRouter as Router ,Link ,Route ,Redirect,withRouter } from 'react-router-dom'

import Home from './Home'

class Logout extends Component {

    constructor() {
        super();

    }
    componentDidMount() {
        this.props.logout(); //use for async calls to db etc
    }


    render() {
        return (
            <div>
                    { <div>
                        <Redirect to="/"/>
                        <Route exact path="/" component={Home}/>
                    </div>
                    }
            </div>

        );
    }
}

export default Logout;
