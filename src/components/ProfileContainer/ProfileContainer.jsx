import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile/Profile.jsx';
import axios from 'axios';
import { setUserProfile } from '../../redux/reducer-profilePage.js';

const ProfileContainer = (props) => {
    const { userId } = useParams(); // Извлекаем userId из параметров маршрута

    useEffect(() => {
        const id = userId || 31728; // Если userId отсутствует, используем значение по умолчанию
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    return <Profile {...props} profile={props.profile} />;
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);