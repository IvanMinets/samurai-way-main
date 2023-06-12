import React from 'react';
import {userType} from "../../redux/users-reducer";
import s from './users.module.css'

type UsersPropsType = {
    users: Array<userType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users:Array<userType>) => void
}



const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000',
                    followed: false,
                    fullName: 'Ivan',
                    status: 'My name is Ivan',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'My name is Sasha',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'My name is Andrew',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="#" className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;