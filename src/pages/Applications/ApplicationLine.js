import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateApplication } from '../../actions/actionsApplication';
import GDPR_SVG from '../../assets/images/svg/GDPR.svg';
import SAVE_SVG from '../../assets/images/svg/save.svg';
import CANCEL_SVG from '../../assets/images/svg/back-arrow.svg';
import EDIT_SVG from '../../assets/images/svg/edit.svg';
import ARROW_DOWN_SVG from '../../assets/images/svg/arrow_down.svg';
import { ID_PRODUCT_MANAGER } from '../../constants/config';
import Select from 'react-select';


class ApplicationLine extends Component {

    constructor(props) {
        super(props);

        const { idproject, projectTitle, projectType, data, statusTitle, color, GDPR, description, serverTitle, users, applinks } = props.data;

        this.state = {
            isEdited: false,
            idproject,
            projectType,
            projectTitle,
            data,
            statusTitle,
            color,
            GDPR,
            description,
            serverTitle,
            users,
            applinks
        }
    }


    handleEdit = (e) => {
        e.stopPropagation();
        this.setState(prevState => {
            return { isEdited: !this.state.isEdited }
        })
    }

    handleCancel = (e) => {
        e.stopPropagation();
        this.setState(prevState => {
            return { isEdited: false }
        })
    }

    handleSave = (e) => {
        const line = e.currentTarget.closest('tr.line-edit');
        const idProject = line.getAttribute('idproject');

        const projectData = {
            idProject: idProject,
            title: document.querySelector(`[name="projectTitle_${idProject}"]`).value,
            GDPR: document.querySelector(`[name="GDPR_${idProject}"]`).value,
            description: document.querySelector(`[name="description_${idProject}"]`).value,
        };

        this.props.updateApplication(projectData);

        this.setState(prevState => {
            return { isEdited: false }
        })
    }

    toggleData = (e) => {
        const line = e.currentTarget;
        const extendedLine = line.nextSibling;
        line.classList.toggle("expanded");
        extendedLine.classList.toggle("collapse");
    }

    handleChange = (e) => {
        const prop = e.currentTarget.name.split('_')[0];
        this.setState({ [prop]: e.target.value });
    }

    render() {
        const { idproject, projectTitle, description, projectType, data, statusTitle, color, GDPR, serverTitle, users, applinks } = this.state;
        const isGDPR = GDPR === 1 ? <img className="icon-grid" src={GDPR_SVG} alt="GDPR" /> : null;

        let styleCss = {
            //borderRight: `${color} 10px solid`,
            color: color,
            fontWeight: 'bold'
        };

        if (!this.state.isEdited) {

            let GDPR_data = null;
            if (data !== null) {
                const fields = data.split(';');
                GDPR_data = fields.map((field, i) => {
                    return (<li className="list-group-item bg-dark" key={i}>{field}</li>)
                });
            }

            const productManager = users.find(user => user.idRole = ID_PRODUCT_MANAGER);
            const PO_name = productManager ? `${productManager.firstname} ${productManager.lastname}` : '???';
            
            //console.log("link :", applinks);
            let url_prod = '';
            const link_prod = applinks.find(applink => applink.environmenttypes_idenvironmenttype === 4);

            console.log('test fch', link_prod);

            if (link_prod !== undefined) {
                url_prod = link_prod.url !== undefined ? <a href={link_prod.url} target="_blank">PROD</a> : '';
            }

            return (
                //READ MODE
                <React.Fragment>
                    <tr className="main-line" onClick={this.toggleData}>
                        <td>
                            <img className="icon-grid icon-btn icon-arrow" src={ARROW_DOWN_SVG} alt="edit" />
                            <img onClick={this.handleEdit} className="icon-grid icon-btn" src={EDIT_SVG} alt="edit" />
                        </td>
                        <td>{idproject}</td>
                        <td>{projectTitle}</td>
                        <td>{projectType}</td>
                        <td>{serverTitle}</td>
                        <td>{url_prod}</td>
                        <td>{PO_name}</td>
                        <td></td>
                        <td>{isGDPR}</td>
                        <td style={styleCss}>{statusTitle}</td>
                    </tr>
                    <tr className="sub-line collapse">

                        <td colSpan="9">
                            <div className="row">
                                <div className="col-9">
                                    <h6>Description</h6>
                                    <p>{this.props.data.description}</p>
                                    <h6>Server title</h6>
                                    <p>{serverTitle}</p>
                                </div>
                                <div className="col-3">
                                    <div className="card bg-dark">
                                        <div className="card-header bg-secondary">
                                            GDPR fields
                                        </div>
                                        <ul>{GDPR_data}</ul>
                                    </div>
                                </div>

                            </div>

                        </td>
                    </tr>
                </React.Fragment>
            )

        } else {

            return (
                //EDIT MODE
                <React.Fragment>
                    <tr className="line-edit no-select" idproject={idproject}>
                        <td>
                            <img onClick={this.handleSave} className="icon-grid icon-btn" src={SAVE_SVG} alt="save" />
                            <img onClick={this.handleCancel} className="icon-grid icon-cancel icon-btn" src={CANCEL_SVG} alt="cancel" />
                        </td>
                        <td>{idproject}</td>
                        <td><input onChange={this.handleChange} type="text" value={projectTitle} name={`projectTitle_${idproject}`} /></td>
                        <td></td>
                        <td>TODO</td>
                        <td>
                            <select name={`GDPR_${idproject}`} value={GDPR}>
                                <option value="0">-</option>
                                <option value="1">GDPR</option>
                            </select>
                        </td>
                        <td style={styleCss}>{statusTitle}</td>
                    </tr>
                    <tr className="sub-line">

                        <td colSpan="9">
                            <div className="row">
                                <div className="col-9">
                                    <h6>Description</h6>
                                    <textarea name={`description_${idproject}`} onChange={this.handleChange} style={{ width: '100%' }}>{description}</textarea>
                                </div>
                                <div className="col-3">
                                    <div className="card bg-dark">
                                        <div className="card-header bg-secondary">
                                            GDPR fields
                                        </div>
                                        <ul></ul>
                                    </div>
                                </div>
                            </div>

                        </td>
                    </tr>
                </React.Fragment>
            )
        }
    }


}

const mapStateToProps = state => ({
    applications: state.dataApplication.applications,
});

const mapDispatchToProps = dispatch => ({
    updateApplication: (projectData) => dispatch(updateApplication(projectData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationLine);
