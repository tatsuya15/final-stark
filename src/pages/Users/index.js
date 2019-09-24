import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsersList, addUser } from '../../actions/actionsUser';
import UserCard from '../../components/UserCard';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import FormUser from './FormUser';

class Users extends Component {

    state = {
        currentUser: null
    }

    componentDidMount() {
        this.props.getUsersList();
        this.setState(prevState => {
            return { currentUsers: this.props.users }
        })
    }

    render() {
        return (
            <React.Fragment>
                <Modal />
                <h1>Users</h1>

                <nav className="navbar navbar-light bg-dark mt-3">
                    <form className="form-inline form-search">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="button">Search</button>
                        <button className="btn btn-outline-dark ml-2" type="button">Add</button>
                    </form>
                </nav>

                <FormUser addUser={this.props.addUser}/>

                <div className="row p-3">
                    {this.props.users === null ? (
                        <Loader />
                    ) : (
                        this.props.users.map(user => {
                            return <UserCard key={user.id} data={user} />
                        })
                    )}
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    users: state.dataUser.users
});

const mapDispatchToProps = dispatch => ({
    getUsersList: () => dispatch(getUsersList()),
    addUser: (userData) => dispatch(addUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
