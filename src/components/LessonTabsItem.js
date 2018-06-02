import React from 'react';
import { NavLink } from 'react-router-dom'
import LessonItem from '../css/LessonItem.css'
export default class LessonTabItem
    extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <NavLink className="cm-navBar-lssn" activeClassName="cm-active-lssn-link" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
            <div >
                <li className="cm-module-lssn-li nav-item">
                {this.props.lesson.title}
                <span className='cm-trash-lssn-icon float-right'>
                <i onClick={() =>
                {this.props.delete(this.props.lesson.id)}} className="fa fa-trash"></i>
                </span>
            </li>
            </div>
            </NavLink>

        );
    }
}
