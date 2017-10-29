var initialState = {
    alert:false,
    error:false,
}
export default function(state = initialState,action){
    switch(action.type){
        case "SET_ALERT":
            return state = {
                ...state,
                alert:true,
                error:action.payload,
            };
        case "RESET_ALERT":
            return state = {
                ...state,
                alert:false,
            };
        default:
        return state;
    }
}