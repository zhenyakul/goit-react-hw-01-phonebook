import style from '../friends/Friends.module.css'
const Friends = ({friends}) => {
    return( 
        <ul className={style.friendList}>
            {friends.map(friend => (
                <li className="item">
                    {friend.isOnline ? (
                        <span className={style.statusTrue}>1</span>
                    ) : (
                    <span className={style.statusFalse}>1</span>
                    )}
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
              </li>
            ))}
        </ul>
        )
        
}

export default Friends