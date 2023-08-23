import {authAPI} from "../api/authAPI";

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
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserDataAC = (userId: any, email: any, login: any) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
})
export const getAuthUserDataTC = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login));
            }
        });
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login));
            }
        });
}

export default authReducer;