const SET_USER_DATA = 'SET_USER_DATA';

let initState: any = {
    userId: 2,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserDataAC = (userId: any, email: any, login: any) => ({type: SET_USER_DATA, data: {userId, email, login}})

export default authReducer;