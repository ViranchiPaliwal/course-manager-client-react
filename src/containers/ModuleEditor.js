import React from 'react';

export default class ModuleEditor
    extends React.Component {

    constructor(props){
        super(props);
        this.state={
            courseId:'', moduleId:''
        }

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);

    }

    componentDidMount(){
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    render() { return(
        <div>
        <h1>Module Editor</h1>
        {this.state.courseId},
        {this.state.moduleId}
        <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active"
                                    href="#">Active Tab</a></li>
            <li className="nav-item"><a className="nav-link"
                                    href="#">Another Tab</a></li>
        </ul>
        </div>
    );}}
