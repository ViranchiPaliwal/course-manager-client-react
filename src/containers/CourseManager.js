import React, {Component} from 'react';
import CourseList from './CourseList';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseEditor from './CourseEditor'
import LessonEditor from "./LessonEditor";
import ModuleEditor from "./ModuleEditor";
export default class CourseManager extends Component{
    render(){
        return (
            <Router>
            <div className='container-fluid'>
            <Route path='/courses' component={CourseList}>
            </Route>
    <div className="row">
    <div className="col-4">
            <Route path="/course/:courseId"
                   component={CourseEditor}>
            </Route>
    </div>
    <div className="col-8" style={{padding:"5px,0px,0px,0px"}}>
        <Route path="/course/:courseId/module/:moduleId"
               component={ModuleEditor}/>
        <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
               component={LessonEditor}/>

    </div>
</div>
            </div>
            </Router>
        )
    }
}