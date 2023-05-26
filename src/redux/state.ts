type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    getState: ()=> RootStateType
    _callSubscriber: (_state:RootStateType ) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
    dispatch: (action: ActionsTypes ) => void
}
type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType;

let store : StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It is my first post", likesCount: 11},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Ivan"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
      return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    addPost() {
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;