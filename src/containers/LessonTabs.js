import React from 'react';
import LessonService from "../services/LessonService";
import LessonTabsItem from "../components/LessonTabsItem";
import LessonTabsStyle from "../css/LessonTabs.css"

export default class LessonTabs extends React.Component {

    constructor(props){
        super(props);
        this.state={
            courseId:'', moduleId:'', lessons:[], lesson:{title:''}
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.renderListOfLessons = this.renderListOfLessons.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.lessonService = LessonService.instance;
    }

    componentDidMount(){
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonTitle(event) {
        this.setState({lesson: {
                title: event.target.value
            }})}

    createLesson(){
        this.lessonService.createLesson
        (this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule
                (this.state.courseId, this.state.moduleId);
            });
    }

    renderListOfLessons(){
        let lessons = this.state.lessons.map((lesson) =>
            {
                return <LessonTabsItem  key={lesson.id} lesson={lesson} delete={this.deleteLesson}
                                        courseId={this.state.courseId} moduleId={this.state.moduleId}/>
            }
        );
        return (
            lessons
        )
    }

    deleteLesson(lessonId){
        if(window.confirm('Are you sure you want to delete the selected lesson ?')) {
            this.lessonService
                .deleteLesson(lessonId)
                .then(() => {
                    window.location.href = '/course/' + this.state.courseId + '/module/' + this.state.moduleId;
                });
        }
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    render(){
        return(
            <div>
            {/*<input value={this.state.lesson.title} onChange={this.setLessonTitle} placeholder="New Lesson"/>*/}
            {/*<button onClick= {this.createLesson} className="btn btn-primary btn-block">*/}
            {/*<i className="fa fa-plus"></i></button>*/}
                <nav  className="cm-lessntab-nav navbar navbar-expand navbar-light">
                <ul className="navbar-nav mr-auto">
                {this.renderListOfLessons()}
                <li className="nav-item navbar-right cm-lessntab-li">
                    <div className="input-group mb-3">
                        <input type="text" value={this.state.lesson.title} onChange={this.setLessonTitle} placeholder="New Lesson" className="form-control"/>
                        <div className="input-group-append">
                            <button onClick= {this.createLesson} className="cm-add-button btn btn-primary float-right">
                                <i className="cm-add-icon fa fa-lg fa-plus"></i></button>
                        </div>
                    </div>
                </li>
                </ul>
                </nav>
                <hr className="cm-lessntab-hr"/>
            </div>
        )
    }
}