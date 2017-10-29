export function alert(flag){
    return{
        type:"SET_ALERT",
        payload:flag
    }
}
export function resetAlert(){
    return {
        type : "RESET_ALERT",
    }
}