import React from 'react';

type ProfileStatusPropsType = {
    status: any
    updateStatus: any
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    onEnterKeyHandler = (e: any) => {
        if (e.key === 'Enter') {
            this.setState({
                editMode: false
            });
            this.props.updateStatus(this.state.status)
        }
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status}
                               onChange={this.onStatusChange} onKeyPress={this.onEnterKeyHandler}/>
                    </div>
                }
            </>

        );
    }
    ;
}

export default ProfileStatus;