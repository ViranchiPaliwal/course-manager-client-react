import React from 'react';
export default class ModuleList extends React.Component {
    render() {
        return (
            <div>
            <h4>Module List for courseId:
                {this.state.courseId}</h4>
            <input value={this.state.module.title} onChange={this.setModuleTitle} placeholder="New Module"/>
            <button onClick={this.createModule} className="btn btn-primary btn-block">
                <i className="fa fa-plus"></i></button>
            </div>
    )}

    constructor(props) {
        super(props);
        this.state = {courseId: '', module: {title: ''}};
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleTitle =
            this.setModuleTitle.bind(this);
        this.createModule =
            this.createModule.bind(this);


    }

    createModule() {
        console.log(this.state);
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
    }


}
