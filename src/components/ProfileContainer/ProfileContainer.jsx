import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile/Profile.jsx';
import { fetchUserProfile } from '../../redux/reducer-profilePage.js';
import { compose } from 'redux';

const ProfileContainer = (props) => {
    const { userId } = useParams(); // Извлекаем userId из параметров маршрута

    useEffect(() => {
        const id = userId || 31728; // Если userId отсутствует, используем значение по умолчанию
        props.fetchUserProfile(id); // Используем новый thunk для загрузки профиля
    }, [userId]);

    return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, { fetchUserProfile }),
)(ProfileContainer);