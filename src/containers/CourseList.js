import React from 'react';
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService';

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    renderCustomerRow(){
        let courses = this.state.courses.map(
            function (course) {
                return <CourseRow key={course.id} course={course}/>
            }
        )
        return (
            courses
        )
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <th><input onChange={this.titleChanged} className='form-control' id="titleFld"
                                   placeholder="cs101"/></th>
                        <th><button onClick={this.createCourse} className='btn btn-primary'>Add</button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCustomerRow()}
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
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
        console.log(this.state.course);
    }

}
export default CourseList;
