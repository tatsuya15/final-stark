import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsersList, addUser } from '../../actions/actionsUser';
import { getCommonData } from '../../actions/actionsCommonData';
import UserCard from '../../components/UserCard';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import FormUser from './FormUser';
import Select from 'react-select';

class Users extends Component {

    state = {
        isUserFormDisplayed: false
    }

    componentDidMount() {
        this.props.getUsersList();

        if (this.props.commonData === null) {
            this.props.getCommonData();
        }
    }

    onChangeFilter = (e) => {
        console.log(e);
    }

    handleDisplayUserForm = (e) => {
        this.setState({ isUserFormDisplayed: !this.state.isUserFormDisplayed });
    }

    render() {

        const { users } = this.props;

        return (
            <React.Fragment>
                <Modal />
                <h1>Users</h1>

                {this.props.commonData === null ? (
                    <Loader />
                ) : (
                        <nav className="navbar navbar-light bg-dark mt-3 mb-3">
                            <div className="form-row container-fluid">
                                <div className="col-md-3 mb-3">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    {/* <button className="btn btn-outline-dark my-2 my-sm-0" type="button">Search</button> */}
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="filterJobs">Filter by job</label>
                                    <Select
                                        isMulti
                                        name="filterJobs"
                                        className="select-stark"
                                        onChange={(selectedOption) => this.onChangeFilter(selectedOption)}
                                        options={this.props.commonData.jobs} />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <button
                                        className="btn btn-primary ml-2"
                                        type="button"
                                        onClick={(e) => this.handleDisplayUserForm(e)}
                                    >Add a new user</button>
                                </div>
                            </div>
                        </nav>
                    )}

                <FormUser
                    addUser={this.props.addUser}
                    commonData={this.props.commonData}
                    isDisplayed={this.state.isUserFormDisplayed}
                />

                <div className="row p-3">
                    {users === null ? (
                        <Loader />
                    ) : (
                            users.map(user => {
                                return <UserCard key={user.id} data={user} />
                            })
                        )}
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        users: state.dataUser.users,
        commonData: state.commonData.commonData
    }
};

const mapDispatchToProps = dispatch => ({
    getUsersList: () => dispatch(getUsersList()),
    addUser: (userData) => dispatch(addUser(userData)),
    getCommonData: () => dispatch(getCommonData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
