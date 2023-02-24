
export type themeType = {
    themeId: number
}

const initState: themeType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: actionType): themeType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return state = {...initState, themeId: action.id}
        default:
            return state
    }
}

type actionType = changeThemeIdACType
type changeThemeIdACType = ReturnType<typeof changeThemeIdAC>
export const changeThemeIdAC = (id: number) => {
    return {
        type: 'SET_THEME_ID',
        id
    } as const
} // fix any
