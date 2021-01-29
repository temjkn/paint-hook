export const TOOL = 'TOOL';
export const FILLCOLOR = 'FILLCOLOR';
export const STROKECOLOR = 'STROKECOLOR';
export const LINEWEIGHT = 'LINEWEIGHT';

export const SettingReducer = (state, action) => {
    switch(action.type){
        case TOOL:
            return{
                ...state, currentTool : action.tool
            }
        case FILLCOLOR:
            return{
                ...state, fillColor : action.color
            }
        case STROKECOLOR:
            return{
                ...state, strokeColor : action.color
            }
        case LINEWEIGHT:
            return{
                ...state, lineWeight : action.value
            }
        default :
            return state
    }
}