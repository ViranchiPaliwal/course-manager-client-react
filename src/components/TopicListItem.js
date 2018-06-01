import React from 'react';
import { Link } from 'react-router-dom'

export default class TopicListItem
    extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.moduleId}/topic/${this.props.topic.id}`}>
                <li className="nav-item">
                    {this.props.topic.title}
                    <span className='float-right'>
                <i onClick={() =>
                {this.props.delete(this.props.topic.id)}} className="fa fa-trash"></i>
                <i className="fa fa-pencil"></i>
                </span>
                </li>
            </Link>
        );}}
