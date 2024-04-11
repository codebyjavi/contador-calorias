import { Activity } from "../types"

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } }


// Defino que mi state inicila se va a llamar activities y que va a ser un arreglo de actividades
type ActivityState = {
    activities: Activity[]
}

export const initialState : ActivityState  = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
    ) => {
    
    if(action.type === 'save-activity') {
        console.log('From save-activity type');
    
    }
}