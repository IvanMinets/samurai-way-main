import profileReducer, {addPostAC} from "./profile-reducer";

it('new post should be added', ()=>{
    let action = addPostAC("123test");
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It is my first post", likesCount: 11},
        ]
    }
    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(5);
});
