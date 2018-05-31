import React from 'react';

export default class ModuleEditor extends React.Component {

    constructor(props){
        super(props);
        this.state={
            courseId:'', moduleId:'', lesson:[]
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);

    }

    componentDidMount(){
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    render(){
        return(
            <ul className="nav nav-tabs">
                <li className="nav-item"><a className="nav-link active"
                                            href="#">Active Tab</a></li>
                <li className="nav-item"><a className="nav-link"
                                            href="#">Another Tab</a></li>
            </ul>
        )
    }
}