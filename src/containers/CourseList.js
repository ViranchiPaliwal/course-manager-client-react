import React from 'react';
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService';
import CourseListStyle from '../css/CourseList.css'

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => {
                this.findAllCourses();
            });
    }

    renderCustomerRow(){
        let courses = this.state.courses.map((course) => {
            return <CourseRow course={course} key={course.id}
                              delete={this.deleteCourse}/>
        });
        return (
            courses
        )
    }

    render() {
        return (

            <div>
                <div  className='row cm-header'>
                    <div className='col-sm-3'> <h3 className='cm-child-heading'>Course Manager</h3></div>
                    <div className='col-sm-7'><input className="form-control"  onChange={this.titleChanged}
                                           placeholder="New Course Title"/></div>
                    <div className='col-sm-2'><button className="cm-child-button btn btn-danger"><i className="cm-child-icon fa fa-plus" onClick={this.createCourse}></i></button>
                    </div>
                </div>
                <table className='table-bordered table-striped table'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last Modified by me</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCustomerRow()}
                    </tbody>
                </table>
            </div>
        );
    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });
    }
    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });

    }

}
export default CourseList;
