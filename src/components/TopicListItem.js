import React from 'react';
import { NavLink } from 'react-router-dom'

export default class TopicListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavLink activeClassName="cm-active-link" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>
            <li className="cm-module-lssn-li cm-topic-li nav-item">
                {this.props.topic.title}
                <span className='cm-trash-lssn-icon float-right'>
                <i onClick={() => {
                    this.props.delete(this.props.topic.id)
                }} className="fa fa-trash"></i>
                </span>
            </li>
            </NavLink>
        );
    }
}
