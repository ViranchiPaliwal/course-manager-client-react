import * as constants from "../constants";
import {SAVE_WIDGETS} from "../constants";

export const widgetReducer = (state = {widgets: [], preview: false, googleImageUrls: []}, action) =>{
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
                    {
                        widgetType: 'Heading',
                        size: 1,
                        id: state.widgets.length + 1,
                        widgetPos: state.widgets.length + 1
                    }
                ]
            }
        case constants.FIND_WIDGETS_FOR_TOPIC:
            return {
                widgets:action.widgets,
                topicId:action.topicId
            }
        case constants.SAVE_WIDGETS:
            fetch(constants.SAVE_WIDGETS_URL.replace('topicId', action.topicId), {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })
            return state

        case constants.MOVE_UPWARD:
            const updatedWidgetUp = swap(state.widgets, action.widgetPos-1, action.widgetPos-2)
            newState = {
                widgets: updatedWidgetUp,
                preview: state.preview,
                topicId: state.topicId
            }
            return JSON.parse(JSON.stringify(newState));


        case constants.MOVE_DOWNWARD:
            const updatedWidgetDown = swap(state.widgets, action.widgetPos, action.widgetPos-1)
            newState = {
                widgets: updatedWidgetDown,
                preview: state.preview,
                topicId: state.topicId
            }
            return JSON.parse(JSON.stringify(newState));


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

        case constants.IMAGE_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.imageLink=action.imageLink
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LIST_CONTENT_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.listContent=action.listContent
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LIST_TYPE_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.listType=action.listType
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LINK_CONTENT_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.linkContent=action.linkContent
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LINK_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.linkUrl=action.linkUrl
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.PARA_CONTENT_CHANGED:
            return {
                widgets: state.widgets.map(widget =>{
                    if(widget.id===action.id){
                        widget.paraContent=action.paraContent
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.GOOGLE_QUERY:
            let urls = action.googleImageUrls.items.filter(item => {
                return !!item&&!!item.pagemap&&!!item.pagemap.cse_image&&!!item.pagemap.cse_image[0]&&!!item.pagemap.cse_image[0].src

            }).map(item => { return item.pagemap.cse_image[0].src});
            state.googleImageUrls=urls
            return JSON.parse(JSON.stringify(state));

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

const swap = (widgets, fi, si) =>{
    widgets = widgets.slice()
    widgets[fi].widgetPos-=1
    widgets[si].widgetPos+=1
    const temp = widgets[fi];
    widgets[fi] = widgets[si];
    widgets[si] = temp;
    return widgets
}