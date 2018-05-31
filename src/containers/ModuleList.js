import React from 'react';
import ModuleService from '../services/ModuleService'
import ModuleListItem from '../components/ModuleListItem';
import ModuleEditor from './ModuleEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class ModuleList extends React.Component {
    render() {
        return (
            <Router>
            <div>
            <h4>Module List for courseId:
                {this.state.courseId}</h4>
            <div className="row">
            <div className="col-4">
            <input value={this.state.module.title} onChange={this.setModuleTitle} placeholder="New Module"/>
            <button onClick={this.createModule} className="btn btn-primary btn-block">
            <i className="fa fa-plus"></i></button>
                {this.renderListOfModules()}
            </div>
            <div className="col-8">
                <Route path="/course/:courseId/module/:moduleId"
                       component={ModuleEditor}/>
            </div>
            </div>
            </div>
            </Router>
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
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });
    }






}
