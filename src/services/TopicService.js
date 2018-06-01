let _singleton = Symbol();
const TOPIC_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
const DELETE_TOPIC_API = 'http://localhost:8080/api/topic/TOPIC_ID';

export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    createTopic(courseId, moduleId, lessonId, topic) {
        return fetch(TOPIC_API_URL.replace('CID', courseId).replace('MID',moduleId).replace('LID',lessonId),
            {   body: JSON.stringify(topic),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        return fetch(
            TOPIC_API_URL.replace('CID', courseId).replace('MID',moduleId).replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteTopic(topicId) {
        return fetch(DELETE_TOPIC_API.replace
        ('TOPIC_ID', topicId), {
            method: 'delete'
        })
    }


    }
