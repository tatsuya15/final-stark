import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getListApplications } from '../../actions/actionsApplication';
import { getCommonData } from '../../actions/actionsCommonData';
import ApplicationLine from './ApplicationLine';
import ACTION_SVG from '../../assets/images/svg/action.svg';
import Loader from '../../components/Loader';

class Applications extends Component {

    componentDidMount() {
        this.props.getListApplications();

        if (this.props.commonData === null) {
            this.props.getCommonData();
        }
    }

    state

    render() {

        const { applications } = this.props;

        const nbApps2flush = applications !== null ? applications.filter(application => application.idstatusproject === 5 ).length : 0;
        const nbApps2keep = applications !== null ? applications.filter(application => application.idstatusproject === 3 ).length : 0;
        const nbAppsStopped = applications !== null ? applications.filter(application => application.idstatusproject === 4 ).length : 0;

        return (
            <React.Fragment>
                <h1>Applications</h1>
                {applications === null ? (
                    <Loader />
                ) : (
                        <div>
                            <ul className="applications-counter">
                                <li><span className="legend">Number of applications:</span> <span className="counter">{applications.length}</span></li>
                                <li><span className="legend">Number of applications to keep:</span> <span className="counter">{nbApps2keep}</span></li>
                                <li><span className="legend">Number of applications to flush:</span> <span className="counter">{nbApps2flush}</span></li>
                                <li><span className="legend">Number of stopped applications:</span> <span className="counter">{nbAppsStopped}</span></li>
                            </ul>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col"><img className="icon-grid-s" src={ACTION_SVG} alt="action" /></th>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Server</th>
                                        <th scope="col">App. Owner</th>
                                        <th scope="col">GDPR</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {applications.map(application => {
                                        return (
                                            <ApplicationLine key={application.idproject} data={application} />
                                        );

                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    applications: state.dataApplication.applications,
    commonData: state.commonData.commonData
});

const mapDispatchToProps = dispatch => ({
    getListApplications: () => dispatch(getListApplications()),
    getCommonData: () => dispatch(getCommonData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
