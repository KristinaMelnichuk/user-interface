import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile/Profile.jsx';
import { fetchUserProfile, getStatus, updateStatus } from '../../redux/reducer-profilePage.js';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';

const ProfileContainer = (props) => {
    const { userId } = useParams(); // Извлекаем userId из параметров маршрута

    useEffect(() => {
        const id = userId || 31728; // Если userId отсутствует, используем значение по умолчанию
        props.fetchUserProfile(id); // Используем новый thunk для загрузки профиля
        props.getStatus(userId);
        props.updateStatus(userId);
    }, [userId]);

    return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { fetchUserProfile, getStatus, updateStatus }),
    withAuthRedirect
)(ProfileContainer);