import {ADD_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS, SAVE_ITEMS} from "../constants";

export const widgetReducer = (state = {widgets: []}, action) =>{
    switch (action.type){
        case FIND_ALL_WIDGETS:
            return {
                widgets: action.widgets
            }
        case DELETE_WIDGET:
            return {
                widgets:state.widgets.filter(widget => (
                    widget.id != action.id
                ))}
        case ADD_WIDGET:
            return {
                widgets:[
                    ...state.widgets,
                    {id: state.widgets.length + 2, text: 'New Widget', widgetType: 'Paragraph'}
                ]
            }
        case SAVE_ITEMS:
            fetch('http://localhost:8080/api/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })
        case 'SELECT_WIDGET_TYPE':
            let newState = {
                widgets:state.widgets.filter((widget)=>{
                    if(widget.id===action.id) {
                        widget.widgetType = action.widgetType;
                    }
                    return true;
                })}
            return JSON.parse(JSON.stringify(newState));

        default:
            return state
    }
}
