import { useReducer } from "react"
import { SettingContext } from "./SettingContext";
import { SettingReducer, TOOL,
    FILLCOLOR, STROKECOLOR, LINEWEIGHT } from "./SettingReducer";

export const SettingState = ({children}) => {
    const initialState = {
        currentTool : 'brush',
        fillColor : '#ff1111',
        strokeColor : '#6dd0af',
        lineWeight : 10,
    }

    const [state, dispatch] = useReducer(SettingReducer, initialState);

    const changeTool = (tool) => {
        dispatch({type: TOOL, tool})
    }
    const changeFillColor = (color) => {
        dispatch({type: FILLCOLOR, color})
    }
    const changeStrokeColor = (color) => {
        dispatch({type: STROKECOLOR, color})
    }
    const changeLineWeight = (value) => {
        dispatch({type: LINEWEIGHT, value})
    }
    return (
        <SettingContext.Provider value = {{
            changeTool,
            changeFillColor,
            changeStrokeColor,
            changeLineWeight,
            currentTool : state.currentTool,
            fillColor : state.fillColor,
            strokeColor : state.strokeColor,
            lineWeight : state.lineWeight,
        }}
        >
            {children}
        </SettingContext.Provider>
    )
}