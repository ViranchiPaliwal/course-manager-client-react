import React from 'react';
import TopicListItem from "../components/TopicListItem";
import TopicService from "../services/TopicService";


export default class TopicList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            courseId:'', moduleId:'', lessonId:'', topics:[], topic:{title:''}
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);

        this.createTopic = this.createTopic.bind(this);
        this.setTopicTitle = this.setTopicTitle.bind(this);
        this.setTopics = this.setTopics.bind(this);
        this.renderListOfTopics = this.renderListOfTopics.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.findAllTopicsForLesson = this.findAllTopicsForLesson.bind(this);
        this.topicService = TopicService.instance;
    }

    componentDidMount(){
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
        this.findAllTopicsForLesson(this.props.match.params.courseId, this.props.match.params.moduleId, this.props.match.params.lessonId);

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

    setTopicTitle(event) {
        this.setState({topic: {
                title: event.target.value
            }})}

    createTopic(){
        this.topicService.createTopic
        (this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
            .then(() => {
                this.findAllTopicsForLesson
                (this.state.courseId, this.state.moduleId, this.state.lessonId);
            });
    }

    renderListOfTopics(){
        let topics = this.state.topics.map((topic) =>
            {
                return <TopicListItem  key={topic.id} topic={topic} delete={this.deleteTopic}
                                        courseId={this.state.courseId} moduleId={this.state.moduleId}
                                        lessonId={this.state.lessonId }/>
            }
        );
        return (
            topics
        )
    }

    deleteTopic(topicId){
        this.topicService
            .deleteTopic(topicId)
            .then(() => {
                this.findAllTopicsForLesson
                (this.state.courseId, this.state.moduleId, this.state.lessonId)
            });
    }

    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        this.topicService
            .findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then((topics) => {this.setTopics(topics)});
    }

    setTopics(topics) {
        this.setState({topics: topics})
    }

    render(){
        return(
            <div>
            <input value={this.state.topic.title} onChange={this.setTopicTitle} placeholder="New Topic"/>
            <button onClick= {this.createTopic} className="btn btn-primary btn-block">
            <i className="fa fa-plus"></i></button>
            <ul className="nav nav-pills">
                {this.renderListOfTopics()}
            </ul>
            </div>
        )
    }
}