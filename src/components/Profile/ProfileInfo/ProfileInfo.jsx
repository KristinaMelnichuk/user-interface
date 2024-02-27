import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={c.profilegrid}>
            <div>
                <img src="https://interier-foto.ru/wp-content/uploads/2014/11/gora-beluha6137.jpg" />
            </div>
            <div className={c.profiletxt}>
                <p>Кристина Мельничук</p>
                <p>Город: Набережные Челны</p>
            </div>
        </div>
    )
}

export default ProfileInfo;