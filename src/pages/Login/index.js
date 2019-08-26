import React, { Component } from 'react';
// import M from "materialize-css";

class Login extends Component {

    state = {
        username: '',
        password: '',
        rememberMe: false
    }

    componentDidMount() {
        // Auto initialize all the things!
        // M.AutoInit();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted');
    }

    handleChange = (e) => {

    }

    formTest = () => {
        return (
            <div>
                <form onSubmit={console.log("hello")} className="stark-form">
                    <h1>Sign in</h1>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="username"
                                value=""
                            />
                            <label htmlFor="todo">Username:</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="username"
                                value=""
                            />
                            <label htmlFor="todo">Username:</label>
                        </div>
                    </div>

                    <div className="row">
                    <div className="input-field col s12">
                            <input id="remember2" type="checkbox" />
                            <label htmlFor="remember2">Remenber me</label>
                        </div>
                    </div>

                </form>
            </div>
        );

    }

    render() {
        return (

            <div className="container">

                {this.formTest()}

                <div className="row stark-form">
                    <div className="col s12 m8 l6 offset-m2 offset-l3">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="card">

                                <h1>Sign in</h1>
                                <div className="card-content">

                                    <div className="row">
                                        <div className="input-field col l-12">
                                            <input id="username" type="text" placeholder="" value="" />
                                            <label htmlFor="username">Username</label>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s-12">
                                            <input id="password" type="password" placeholder="" value="" />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s-12">
                                            <input id="remember" type="checkbox" />
                                            <label htmlFor="remember">Remenber me</label>
                                        </div>
                                    </div>


                                </div>
                                <div className="card-action">
                                    <div className="input-field center-align">
                                        <button className="btn waves-effect waves-light" type="submit">
                                            Login
                                </button>
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


};

export default Login;
