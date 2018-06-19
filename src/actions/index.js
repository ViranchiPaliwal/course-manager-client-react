import * as constants from "../constants";

export const findAllWidgets = (dispatch, topicId) => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets,
            topicId: topicId}))
}

export const addWidget = dispatch =>{
    dispatch({type: constants.ADD_WIDGET})
}



export const save = (dispatch, topicId) => {
    dispatch({type: constants.SAVE_WIDGETS, topicId: topicId})
}

export const preview = (dispatch, topicId) => {
    dispatch({type: constants.PREVIEW, topicId: topicId})
}


export const headingSizeChanged = (dispatch, widgetId, newSize) =>{
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
    id:widgetId,
    size:newSize})
}

export const headingTextChanged = (dispatch, widgetId, newText) =>{
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id:widgetId,
        text:newText})
}

export const widgetNameChanged = (dispatch, widgetId, newName) => (
    dispatch(
        {
            type: constants.WIDGET_NAME_CHANGED,
            id: widgetId,
            widgetName: newName
        }
    )
)