import React from 'react';

const ProfilePhoto = ({ profile }) => {
    return (
        <div>
            {/* Загрузка фото профиля пользователя */}
            <img src={profile.photos.large || 'https://via.placeholder.com/150'} />
        </div>
    );
};

export default ProfilePhoto;