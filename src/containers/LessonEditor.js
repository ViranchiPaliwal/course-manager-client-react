import React from 'react';
import TopicList from './TopicList'
import TopicEditor from "./TopicEditor";
import {Route} from 'react-router-dom'


export default class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '', moduleId: '', lessonId: '', topics: [], topic: {title: ''}
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    render() {
        return (
            <div>
                <TopicList courseId={this.state.courseId} lessonId={this.state.lessonId}
                           moduleId={this.state.moduleId}/>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                       component={TopicEditor}/>
            </div>
        )
    }
}