import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return (<div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}



let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile: getUserProfileTC})(WithUrlDataContainerComponent);