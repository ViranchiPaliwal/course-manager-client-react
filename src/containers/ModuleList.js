import React from 'react';
import ModuleService from '../services/ModuleService'
import ModuleListItem from '../components/ModuleListItem';

export default class ModuleList extends React.Component {
    render() {
        return (
            <div>
            <h4>Module List for courseId:
                {this.state.courseId}</h4>
            <input value={this.state.module.title} onChange={this.setModuleTitle} placeholder="New Module"/>
            <button onClick={this.createModule} className="btn btn-primary btn-block">
                <i className="fa fa-plus"></i></button>

            {this.renderListOfModules()}
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
            return <ModuleListItem key={module.id}
                                   module={module}/>
        });
        return (
            <ul>{modules}</ul>
        )
    }





}
