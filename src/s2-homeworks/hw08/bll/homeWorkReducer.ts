import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return [...state].sort((a,b)=> a.name.localeCompare(b.name)) // need to fix
            } else return [...state].sort((a,b)=> b.name.localeCompare(a.name))
        }
        case 'check': {
            return state.filter(st => st.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
