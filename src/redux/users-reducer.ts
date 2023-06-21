export type userLocationType = {
    city: string,
    country: string
}
export type userType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: userLocationType
}
export type usersType = {
    users: Array<userType>
}

let initState: any = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducers = (state: usersType = initState, action: any) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}

        case 'SET_CURRENT_PAGE' :
            return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}

export const followAC = (userId: number) => {return {type: 'FOLLOW', userId: userId} as const}
export const unfollowAC = (userId: number) => {return {type: 'UNFOLLOW', userId: userId} as const}
export const setUsersAC = (users: any) => {return {type: 'SET_USERS', users: users} as const}
export const setCurrentPageAC = (currentPage: any) => {return {type: 'SET_CURRENT_PAGE', currentPage: currentPage} as const}

export default usersReducers;