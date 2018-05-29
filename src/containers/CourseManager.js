import React, {Component} from 'react';
import CourseList from './CourseList';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseEditor from './CourseEditor'
export default class CourseManager extends Component{
    render(){
        return (
            <Router>
            <div className='container-fluid'>
            <h1>Course Manager</h1>
            <Route path='/courses' component={CourseList}>
            </Route>
            <Route path="/course/:courseId/edit"
                   component={CourseEditor}>
            </Route>
            <CourseList/>
            </div>
            </Router>
        )
    }
}