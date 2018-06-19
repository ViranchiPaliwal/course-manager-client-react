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

export const imageUrlChanged = (dispatch, widgetId, newUrl) => (
    dispatch(
        {
            type: constants.IMAGE_URL_CHANGED,
            id: widgetId,
            imageLink: newUrl
        }
    )
)

export const queryChanged = (dispatch, query) => {
    fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyAnN73zsGPt7Rs2E-n-FDLXl_rlle_V1OA&cx=011117383754519309180:7htllrp63u4&q=googleQuery'.replace("googleQuery",query))
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.GOOGLE_QUERY,
            googleImageUrls: widgets}))
}

export const listContentChanged = (dispatch, widgetId, newContent) => (
    dispatch(
        {
            type: constants.LIST_CONTENT_CHANGED,
            id: widgetId,
            listContent: newContent
        }
    )
)

export const listTypeChanged = (dispatch, widgetId, newType) => (
    dispatch(
        {
            type: constants.LIST_TYPE_CHANGED,
            id: widgetId,
            listType: newType
        }
    )
)

export const linkUrlChanged = (dispatch, widgetId, newUrl) => (
    dispatch(
        {
            type: constants.LINK_URL_CHANGED,
            id: widgetId,
            linkUrl: newUrl
        }
    )
)
export const linkContentChanged = (dispatch, widgetId, newContent) => (
    dispatch(
        {
            type: constants.LINK_CONTENT_CHANGED,
            id: widgetId,
            linkContent: newContent
        }
    )
)
export const paraContentChanged = (dispatch, widgetId, newContent) => (
    dispatch(
        {
            type: constants.PARA_CONTENT_CHANGED,
            id: widgetId,
            paraContent: newContent
        }
    )
)