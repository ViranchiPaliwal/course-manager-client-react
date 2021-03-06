import React from 'react';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {widgetReducer} from "../reducers/widgetReducers";
import Widget  from './WidgetList'
export default class TopicEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '', moduleId: '', lessonId: '', topicId: ''
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicId = this.setTopicId.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
        this.setTopicId(this.props.match.params.topicId);

    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
        this.setTopicId(newProps.match.params.topicId);
    }

    setTopicId(topicId){
        this.setState({topicId:topicId})
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
        return(
            <Provider store={store}>
                <Widget courseId={this.state.courseId} moduleId={this.state.moduleId} lessonId={this.state.lessonId} topicId={this.state.topicId}/>
            </Provider>
        )
    }
}

let store = createStore(widgetReducer)
