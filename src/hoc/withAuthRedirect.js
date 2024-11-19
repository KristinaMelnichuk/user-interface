import { Navigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to='/login' />; // Переход на логинизацию
        }
        return <Component {...props} />
    };
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};