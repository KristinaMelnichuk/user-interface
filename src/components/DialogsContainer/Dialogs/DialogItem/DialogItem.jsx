import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={styles.item}>
            <section className={styles.name}>
                <NavLink to={path}>{props.sender}</NavLink>
            </section>

            <section className={styles.image}>
                <img src={props.avatar} />
            </section>
        </div>
    )
}

export default DialogItem;