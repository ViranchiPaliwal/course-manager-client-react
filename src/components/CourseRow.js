import React from 'react';
import { Link } from 'react-router-dom';

class CourseRow extends React.Component {
    constructor(props) { super(props); }
    render() {
        let date="", lastModified = this.props.course.modified;
        if(lastModified){
            date = lastModified.split('T')[0];
        }
        return (
            <tr><td>
            <Link to= {`/course/${this.props.course.id}`}>
                  {this.props.course.title}
            </Link></td>
            <td>me</td>
            <td> {date}</td>
            <td>  <button onClick={() =>
                {this.props.delete(this.props.course.id)}} >
                <i className="fa fa-2x fa-remove" style={{color: "gray"}}></i></button></td>
            </tr>

    )
    }
}
export default CourseRow;
