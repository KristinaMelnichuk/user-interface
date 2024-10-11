import { Component } from "react";
import Header from '../Header';
import styles from './HeaderGrid.module.css'
import { connect } from "react-redux";
import axios from "axios";
import { setAuthUserData } from "../../../redux/reducer-auth";

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error); // Ловим ошибки, если что-то пойдёт не так
            });
    }

    render() {
        return (
            <div className={styles.headerGrid}>
                <Header {...this.props} />
            </div>
        )
    };
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);