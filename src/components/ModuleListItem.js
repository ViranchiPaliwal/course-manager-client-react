import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
            <li className="list-group-item">
                {this.props.module.title}
                <span className='float-right'>
                <i onClick={() =>
                {this.props.delete(this.props.module.id)}} className="fa fa-trash"></i>
                <i className="fa fa-pencil"></i>
                </span>
            </li>
            </Link>
        );}}
