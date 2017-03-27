import React, {Component} from 'react'
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    saveDetails = () => {

        const user = {
            name: this.state.name,
            pwd: this.state.pwd,
            id: Math.floor(Math.random() * 10000000),
            todolist: [],
        };
        console.log(user, '>>>>>>>signup>>>>>>');
        this.props.addUser(user);
        this.setState({name: '', pwd: ''});

    }

    render() {

        return (

            <div >
                <h2> Signup </h2>

                <label>Enter Name:</label>
                <div>
                    <input
                        type="text"
                        value={ this.state.name }
                        placeholder="Enter Name"
                        onChange={ (event) => this.setState({name: event.target.value}) }
                    />
                </div>
                < label> Enter Password:</label>
                <div >
                    <input
                        type="password"
                        value={ this.state.pwd }
                        placeholder="Enter Password"
                        onChange={(event) => this.setState({pwd: event.target.value})}
                    />
                </div>
                <button onClick={this.saveDetails}>Signup</button>

            </div>
        )

    }


}