
import React,{Component} from 'react'
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            pwd: '',
        };
    }

    matchDetails =() => {

        this.props.authenticateUser(this.state);
        this.setState({
            name: '',
            pwd: ''
        })
    }

    render() {

        return(

            <div>
                <h2>LOGIN</h2>

                <label >Enter Name:</label>
                <div >
                    <input
                        type="text"
                        value={ this.state.name }
                        placeholder="Enter Name"
                        onChange={ (event) => this.setState({ name: event.target.value }) }
                    />
                </div>

                        <label>Enter Password:</label>
                        <div >
                            <input
                                type="password"
                                value={ this.state.pwd }
                                placeholder="Enter Password"
                                onChange={(event) => this.setState({ pwd: event.target.value })}
                            />
                        </div>


                        <div >
                            <button onClick={this.matchDetails}>Login</button>
                        </div>
                    </div>





        )

    }


}