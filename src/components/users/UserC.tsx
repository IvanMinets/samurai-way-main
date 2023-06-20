import React from 'react';
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg";
import s from "./users.module.css";

interface UsersPropsType  {
    users: Array<any>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
}

class UserC extends React.Component<UsersPropsType> {

    constructor(props: any) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {
        return (

            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#"
                                 className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                   this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
            ;
    }
    ;
}
;

export default UserC;