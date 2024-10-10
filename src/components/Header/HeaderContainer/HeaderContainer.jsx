import { Component } from "react";
import Header from '../Header';
import styles from './HeaderGrid.module.css'
import { connect } from "react-redux";
import axios from "axios";
import { setUserData } from "../../../redux/reducer-auth";

class HeaderContainer extends Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.login);
                }
            });
    }

    render() {
        return (
            <div className={styles.headerGrid}>
                <Header />
            </div>
        )
    };
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);