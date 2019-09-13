import React, { Component } from 'react';
import Floor from '../../components/login/Floor';
import LogoSVG from '../../assets/images/svg/stark_industries_logo_2.svg';
import LogoPNG from '../../assets/images/stark_industries_logo_2.png';

import { connect } from 'react-redux';
import * as types from '../../constants/actionTypes/auth';
import { loginRequest } from '../../actions/actionsAuth';
import { getListUsers, getUserById } from '../../actions/actionsTest';



class Login extends Component {

    state = {
        email: '',
        password: '',
        remember: false
    }

    componentDidMount() {
        this.props.getListUsers();
        this.props.getUserById(1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted');
        const form = document.getElementById('formLogin');

        const remember = form.remember.checked ? 1 : 0;

        this.props.loginRequest(form.email.value, form.password.value, remember);
    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
    }

    handleCheckbox = (e) => {
        const id = (e.currentTarget.id)
        this.setState(prevState => {
            return {
                [id]: !prevState[id]
            }
        })
    }

    test = () => {
        return (
            <React.Fragment>
                {this.props.users &&

                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.company.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            </React.Fragment>
        );
    }

    card = () => {
        console.log('test current user', this.props.currentUser);
        const currentUser = this.props.currentUser;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{currentUser.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 mx-auto mt-7">
                            <form id="formLogin" onSubmit={e => this.handleSubmit(e)}>
                                <div className="card stark-card shadow-sm">
                                    <div className="card-header">
                                        <img src={LogoSVG} alt="LOGO" className="logo" />
                                        <span>&nbsp;</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" required maxLength="255" className="form-control" id="email" placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" required minLength="6" maxLength="255" className="form-control" id="password" placeholder="Password" onChange={(e) => this.handleChange(e)} />
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" checked={this.state.remember ? 'checked' : ''} className="form-check-input" id="remember" onChange={(e) => this.handleCheckbox(e)} />
                                            <label className="form-check-label" htmlFor="remember">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button type="submit" className="btn btn-dark">Login</button>
                                    </div>
                                    {<Floor />}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>



        )
    }


};

const mapStateToProps = state => ({
    users: state.testJSON.users,
    currentUser: state.testJSON.currentUser
});

const mapDispatchToProps = dispatch => ({
    loginRequest: (email, password, remember) => dispatch(loginRequest(email, password, remember)),
    getListUsers: () => dispatch(getListUsers()),
    getUserById: idUser => dispatch(getUserById(idUser)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
