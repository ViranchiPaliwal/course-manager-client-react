import React from 'react';
import { Link } from 'react-router-dom';

class CourseRow extends React.Component {
    constructor(props) { super(props); }
    render() {
        return (
            <tr><td>
            <Link to= {`/course/${this.props.course.id}/edit`}>
                  {this.props.course.title}
            </Link></td>
            <td>me</td>
            <td> {this.props.course.modified.split('T')[0]}</td>
            <td>  <button onClick={() =>
                {this.props.delete(this.props.course.id)}} >
                <i className="fa fa-2x fa-remove" style={{color: "gray"}}></i></button></td>
            </tr>

    )
    }
}
export default CourseRow;
