var initialState = {
    phase:2
}
export default function(state = initialState,action){
    switch(action.type){
        case "SET_PARENT_CATEGORY":
            return state = {
                ...state,
                parentCategory:action.payload
            };
        case "SET_ALL_SUB_CATEGORY":
            return state = {
                ...state,
                allSubCategory:action.payload
            };
        case "SET_PHASE":
            return state = {
                ...state,
                phase:action.phase,
            }
        default:
        return state;
    }
}