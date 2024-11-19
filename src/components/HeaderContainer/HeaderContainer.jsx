import { Component } from "react";
import AuthHeader from './AuthHeader/AuthHeader';
import { connect } from "react-redux";
import { fetchAuthUserData } from '../../redux/reducer-auth';

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.fetchAuthUserData();
    }

    render() {
        return <AuthHeader {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { fetchAuthUserData })(HeaderContainer);
