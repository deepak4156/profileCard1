import React from 'react'
import profile_icon from '../Assets/elon.jpeg'
import './UserProfileCard.css'
// https://www.youtube.com/watch?v=jb0KaJkxq_A
const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Elon Musk</div>
            <div className="profile-description">
                I am the founder, Chairman & Cheif executive officer of Space X, CEO of Tesla , Product officier of the Tesla
            </div>
        </div>
        <div className="profile-button"><a href="mailto:deepakchhantyal4156@gmail.com">Contact Menu</a></div>
    </div>
  )
}


export default UserProfileCard
