import React from 'react';

// Загрузка фото профиля пользователя
const ProfilePhoto = ({ profile }) => {
    return (
        <div>
            <img src={profile.photos.large || 'https://via.placeholder.com/150'} />
        </div>
    );
};

export default ProfilePhoto;