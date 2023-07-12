import React from 'react';

type ProfileStatusPropsType = {
    status: any
    value: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" value={this.props.value}/>
                    </div>
                }
            </>

        );
    }
    ;
}

export default ProfileStatus;