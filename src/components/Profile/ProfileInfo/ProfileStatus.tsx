import React from 'react';

type ProfileStatusPropsType = {
    status: any
    value: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState( {

        })
        this.state.editMode = true;
        this.forceUpdate();
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
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