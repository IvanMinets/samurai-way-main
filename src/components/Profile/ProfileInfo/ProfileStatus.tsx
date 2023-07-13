import React from 'react';

type ProfileStatusPropsType = {
    status: any
    value: string
    updateStatus: any
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState( {
            editMode: true
        });
    }
    deactivateEditMode =() => {
        this.setState( {
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status}/>
                    </div>
                }
            </>

        );
    }
    ;
}

export default ProfileStatus;