import React from 'react';
import { NavLink } from 'react-router-dom'
import ModuleListItemStyle from '../css/ModuleItem.css'
export default class ModuleListItem
    extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <NavLink activeClassName="cm-active-link" to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
            <li className="cm-module-li list-group-item">
               {this.props.module.title}
                <span className='float-right'>
                <i onClick={() =>
                {this.props.delete(this.props.module.id)}} className="fa fa-lg fa-trash"></i>
                </span>
            </li>
            </NavLink>

        );}}
