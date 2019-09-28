import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import { getLicensesList } from '../../actions/actionsLicense';

class Licenses extends Component {

    componentDidMount() {

        this.props.getLicensesList();
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="main">Licenses management</h1>
                { this.props.licenses === null ? (
                <Loader />
                ) : (
                    <React.Fragment>


                </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        licenses: state.helpdesk.licenses
    }
};

const mapDispatchToProps = dispatch => ({
    getLicensesList: (id) => dispatch(getLicensesList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Licenses);
