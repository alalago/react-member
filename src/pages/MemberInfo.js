import React from 'react'
import Header from './MemberHeader'

const MemberInfo = () => {
  return (
    <div className='App'>
        <Header />
        <div className='info-page'>
            <div className="close"></div>
            <h3>基本資料</h3>
            <ul>
                <li>
                    <h6>姓名</h6> 
                    <p>李姍姍</p>
                </li>
                <li>
                    <h6>性別</h6> 
                    <p>女</p>
                </li>
                <li>
                    <h6>出生年月日</h6> 
                    <p>1995/03/11</p>
                </li>
                <li>
                    <h6>身高</h6> 
                    <p>158公分</p>
                </li>
                <li>
                    <h6>體重</h6> 
                    <p>47公斤</p>
                </li>
                <li>
                    <h6>主要服務縣市</h6> 
                    <p>台北市</p>
                </li>
            </ul>
            <hr />
            <h3>聯絡資料</h3>
            <ul>
                <li>
                    <h6>手機號碼</h6>
                    <p>0934-324-722</p>
                </li>
            </ul>
            <hr />
            <h3>收款資料</h3>
            <ul>
                <li>
                    <h6>銀行代碼</h6>
                    <p>812</p>
                </li>
                <li>
                    <h6>銀行帳號</h6>
                    <p>03112340210583</p>
                </li>
            </ul>
            <button>修改資料</button>
            <span>註: 灰色字體為您修改的新資料，待管理員審核 完成後即會變回黑色。</span>
        </div>
      
    </div>
  )
}

export default MemberInfo
