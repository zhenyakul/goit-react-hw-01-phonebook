import style from './Profile.module.css'

const Profile = ({username, tag, location, avatar, stats}) => {
    return(
    <div className="profile">
    <div className={style.description}>
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className={style.name}>{username}</p>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
    </div>
  
    <ul className={style.stats}>
      <li>
        <span className={style.followers}>Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
  )
}

export default Profile