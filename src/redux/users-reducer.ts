import {usersAPI} from "../api/api";

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
    followingInProgress: Array<any>
}

let initState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
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
            return {...state, users: action.users}

        case 'SET_CURRENT_PAGE' :
            return {...state, currentPage: action.currentPage}

        case 'SET_TOTAL_USERS_COUNT' :
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE_IS_FETCHING' :
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followAC = (userId: number) => {
    return {type: 'FOLLOW', userId: userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: 'UNFOLLOW', userId: userId} as const
}
export const setUsersAC = (users: any) => {
    return {type: 'SET_USERS', users: users} as const
}
export const setCurrentPageAC = (currentPage: any) => {
    return {type: 'SET_CURRENT_PAGE', currentPage: currentPage} as const
}
export const setUsersTotalCountAC = (totalCount: any) => {
    return {type: 'SET_TOTAL_USERS_COUNT', totalCount: totalCount} as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: 'TOGGLE_IS_FETCHING', isFetching: isFetching} as const
}
export const toggleFollowingInProgressAC = (isFetching: boolean, userId: any) => {
    return {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching: isFetching, userId} as const
}


export const getUsersThunkCreator = (page: any, pageSize: any) => (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(page))
    usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setUsersTotalCountAC(data.totalCount))
        });
}

export const followThunkCreator = (id: any) => (dispatch: any) => {
    dispatch(toggleFollowingInProgressAC(true, id))
    usersAPI.followUser(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(id));
            }
            dispatch(toggleFollowingInProgressAC(false, id));
        });
}

export const unfollowThunkCreator = (id: any) => (dispatch: any) => {
    dispatch(toggleFollowingInProgressAC(true, id));
    usersAPI.unfollowUser(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(id));
            }
            dispatch(toggleFollowingInProgressAC(false, id));
        });
}

export default usersReducers;