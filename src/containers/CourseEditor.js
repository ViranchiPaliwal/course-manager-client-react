import React from 'react';
import ModuleList from './ModuleList'
import CourseService from '../services/CourseService'

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.selectCourseTitle = this.selectCourseTitle.bind(this);
        this.getCourseTitle = this.getCourseTitle.bind(this);
        this.courseService = CourseService.instance;
        this.state = {courseId: '', courseTitle: ''};
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    selectCourseTitle(courseTitle) {
        this.setState({courseTitle: courseTitle});
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.getCourseTitle(this.props.match.params.courseId);
    }

    getCourseTitle(courseId){
        this.courseService.findAllById(courseId)
            .then((response) => {
                this.selectCourseTitle(response.title);
            })
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
        this.getCourseTitle(newProps.match.params.courseId);
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-light" >
                    <div>
                        <h3>{this.state.courseTitle}</h3>
                    </div>
                </nav>
                <hr style={{background:"#007bff"}}/>
                <ModuleList
                        courseId={this.state.courseId}/>
            </div>
        );
    }
}
