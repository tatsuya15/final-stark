import React, { Component } from 'react';

class FormUser extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        iscastmember:1
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [e.currentTarget.name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addUser({...this.state, 'iscastmember': this.state.iscastmember ? 1 : 0});
    }

    render() {
        return (
            <div className="container-fluid">
                <form className="form-stark" onSubmit={(e) => this.handleSubmit(e)}>
                    <h2>Add a new user</h2>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="firstname">Firstname</label>
                            <input onChange={this.handleChange}
                                className="form-control"
                                name="firstname"
                                type="text"
                                placeholder="firstname"
                                value={this.state.firstname}
                                required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="lastname">Lastname</label>
                            <input onChange={this.handleChange}
                                className="form-control"
                                name="lastname"
                                type="text"
                                placeholder="lastname"
                                value={this.state.lastname}
                                required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="firstname">Email</label>
                            <input onChange={this.handleChange}
                                className="form-control"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleChange}
                                className="form-control"
                                name="password"
                                type="password"
                                placeholder="password"
                                value={this.state.password}
                                required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <input class="form-check-input"
                                onChange={this.handleChange}
                                type="checkbox"
                                name="iscastmember"
                                id="iscastmember"
                                checked={this.state.iscastmember} />
                            <label class="form-check-label" htmlFor="iscastmember">
                                Castmember
                            </label>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <button className="btn btn-primary" type="submit">Create</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default FormUser;
