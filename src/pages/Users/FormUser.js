import React, { Component } from 'react';
import Select from 'react-select';
import { select } from 'redux-saga/effects';

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
        iscastmember: 1,
        job: null,
        team: null
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [e.currentTarget.name]: value })
    }

    handleChangeSelect = (selectedOption, field) => {
        this.setState({ [field.name]: selectedOption });
    };

    handleSubmit(e) {
        e.preventDefault();
        const idjob = this.state.job !== null ? this.state.job.value : null;
        const idteam = this.state.team !== null ? this.state.team.value : null;
        const data = {...this.state, idjob, idteam};
        this.props.addUser(data);
    }

    render() {
        let { jobs, teams } = this.props.commonData !== null ? this.props.commonData : {};

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
                        <div className="col-md-4 mb-3">
                            <label htmlFor="Job">Job</label>
                            <Select
                                name="job"
                                className="select-stark"
                                onChange={(selectedOption, e) => this.handleChangeSelect(selectedOption, e)}
                                options={jobs}
                                value={this.state.job}
                            />
                            <input
                                tabIndex={-1}
                                autoComplete="off"
                                style={{ opacity: 0, height: 0 }}
                                value={this.state.job}
                                type="text"
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="Job">Team</label>
                            <Select
                                required
                                name="team"
                                isSearchable={true}
                                className="select-stark"
                                onChange={(selectedOption, e) => this.handleChangeSelect(selectedOption, e)}
                                options={teams}
                                value={this.state.team}
                            />
                        </div>
                        
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <input className="form-check-input"
                                onChange={this.handleChange}
                                type="checkbox"
                                name="iscastmember"
                                id="iscastmember"
                                checked={this.state.iscastmember} />
                            <label className="form-check-label" htmlFor="iscastmember">
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
