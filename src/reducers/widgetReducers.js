import * as constants from "../constants";
import {SAVE_WIDGETS} from "../constants";

export const widgetReducer = (state = {widgets: [], preview: false}, action) =>{
    switch (action.type){
        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = state.widgets
            return newState
        case constants.PREVIEW:
            return{
                widgets: state.widgets,
                preview: !state.preview,
                topicId: action.topicId
            }
        case constants.DELETE_WIDGET:
            return {
                widgets:state.widgets.filter(widget => (
                    widget.id != action.id
                ))}
        case constants.ADD_WIDGET:
            return {
                widgets:[
                    ...state.widgets,
                    {id: state.widgets.length + 2,
                        text: 'New Widget',
                        widgetType: 'Paragraph',
                        size:'2'
                    }
                ]
            }
        case constants.SAVE_WIDGETS:
            fetch(constants.SAVE_WIDGETS_URL.replace('topicId', action.topicId), {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })
            return state
        case constants.SELECT_WIDGET_TYPE:
            let newState = {
                widgets:state.widgets.filter((widget)=>{
                    if(widget.id===action.id) {
                        widget.widgetType = action.widgetType;
                    }
                    return true;
                })}
            return JSON.parse(JSON.stringify(newState));
        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.size=action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.WIDGET_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.widgetName=action.widgetName
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.text=action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        default:
            return state
    }
}
