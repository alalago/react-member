import React from 'react'
import Memberpic from './images/memberInfo.png';

const MemberHeader = () => {
  return (
    <header>
        <div className='member-photo'>
            <img src={Memberpic} alt="photo" />
        </div>
        <div className="member-name">
            <h1>會員資訊</h1>
        </div>
  </header>      
  )
}

export default MemberHeader
