import React from 'react';
import ModuleList from './ModuleList'

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {courseId: ''};
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (<h3>Course {this.state.courseId}</h3>)
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse
        (newProps.match.params.courseId);
    }


    render() {
        return (

            <div className="row">
                <h2> Editing course: {this.state.courseId}</h2>

                <div className="col-4">
                    <ModuleList
                        courseId={this.state.courseId}/>
                </div>
                <div className="col-8">

                </div>
            </div>
        );
    }
}
