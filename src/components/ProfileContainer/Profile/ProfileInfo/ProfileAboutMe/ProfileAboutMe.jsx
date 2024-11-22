import React from 'react';

const ProfileAboutMe = ({ profile }) => {
    return (
        <div>
            <p>Город: {profile.city || 'Город не указан'}</p>
            <p>Обо мне: {profile.aboutMe || 'Информация не указана'}</p>
            <p>Статус Работы: {profile.lookingForAJobDescription || 'Статус не указан'}</p>
        </div>
    );
};

export default ProfileAboutMe;