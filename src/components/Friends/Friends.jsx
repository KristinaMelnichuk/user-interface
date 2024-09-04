import FriendInfo from './FriendInfo/FriendInfo'
import axios from 'axios';

const Friends = (props) => {
    if (props.friendInfo.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then (response => {
            debugger;
            props.setUsers(response.data.items);
        });
    }

    const friendInfo = props.friendInfo.map(f => <FriendInfo
        name={f.name}
        photos={f.photos}
        id={f.id}
        //location={f.location}
        key={f.id}
        buttonFriend={f.buttonFriend}
        addFriend={props.addFriend}
        deletedFriend={props.deletedFriend}
    />);

    return (
        <div>
            {friendInfo}
        </div>
    )
}

export default Friends;