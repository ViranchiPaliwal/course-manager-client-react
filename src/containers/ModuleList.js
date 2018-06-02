import React from 'react';
import ModuleService from '../services/ModuleService'
import ModuleListItem from '../components/ModuleListItem';
import ModuleEditor from './ModuleEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleListStyle from '../css/ModuleList.css'

export default class ModuleList extends React.Component {
    render() {
        return (
            <div>
            <ul className='cm-ul-list list-group'>
                <li>
                    {/*<div className="row">*/}
                        {/*<div className="col-10" >*/}
                            {/*<input value={this.state.module.title} onChange={this.setModuleTitle} placeholder="New Module"  className="form-control"></input>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                            {/*<button className="cm-add-button btn btn-primary float-right">*/}
                                {/*<i className="cm-add-icon fa fa-lg fa-plus"  onClick={this.createModule}></i></button>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <div className="input-group mb-3">
                        <input type="text" value={this.state.module.title} onChange={this.setModuleTitle} placeholder="New Module"  className="form-control"/>
                            <div className="input-group-append">
                                <button onClick={this.createModule} className="cm-add-button btn btn-primary float-right">
                                <i className="cm-add-icon fa fa-lg fa-plus"></i></button>
                            </div>
                    </div>
                </li>
                {this.renderListOfModules()}
            </ul>
            </div>
    )}

    constructor(props) {
        super(props);
        this.state = {courseId: '', module: {title: ''}, modules: []};
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleTitle =
            this.setModuleTitle.bind(this);
        this.createModule =
            this.createModule.bind(this);
        this.moduleService = ModuleService.instance;
        this.deleteModule = this.deleteModule.bind(this);

    }

    createModule() {
        this.moduleService.createModule
        (this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId);
            });
    }

    setModuleTitle(event) {
        this.setState({module: {
                title: event.target.value
            }})}

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }
    setModules(modules) {
        this.setState({modules: modules})
    }

    renderListOfModules() {
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem module={module} courseId={this.state.courseId} key={module.id} delete={this.deleteModule}/>
        });
        return (
            <ul className="list-group">{modules}</ul>
        )
    }

    deleteModule(moduleId) {
        if(window.confirm('Are you sure you want to delete the selected module ?')){
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                window.location.href = '/course/' + this.state.courseId;
            });
        }
    }
}
