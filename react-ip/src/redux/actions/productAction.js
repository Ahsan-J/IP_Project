export function setParentCategory(item){
    return{
        type :'SET_PARENT_CATEGORY',
        payload : item,
    }
}
export function setAllSubCategory(item){
    return{
        type : 'SET_ALL_SUB_CATEGORY',
        payload : item,
    }
}
export function setPhase(phaseNumber){
    return{
        type:'SET_PHASE',
        phase:phaseNumber,
    }
}