import React from 'react'
import Header from './MemberHeader'
import Arrow from './images/arrow.png'
import { Link } from "react-router-dom";
import { Formik } from 'formik';

const ModifyInfo = () => {
  return (
    <div className='App'>
        <Header />
        <div className="info-modify">
            <Link to="/memberInfo">
                <div className="close"></div>
            </Link>
            <h3>修改您的照服員基本資料</h3>
            <p>請選擇您需要修改的欄位進行填寫，若不需修改，請保留原始資料即可。</p>
            <form action="">
                <label htmlFor="name">姓名</label>
                <input type="text" name='InputName' id="name"/>
                <label htmlFor="bday">出生年月日</label>
                <input type="date" name='Bday' id="bday"/>
                <label htmlFor="height">身高</label>
                <input type="text" name="UserHeight" id="height"/><span>公分</span>
                <label htmlFor="weight">體重</label>
                <input type="text" name="UserWeight" id="weight" /><span>公斤</span>
                <label htmlFor="city">主要服務縣市</label>
                <select name="City" id="city">
                    <option value=""></option>
                </select>
                <label htmlFor="phone">電話</label>
                <input type="tel" name="" id="phone" />
                <label htmlFor="">銀行代碼</label>
                <input type="text" name="" id="" />
                <label htmlFor="">銀行帳號</label>
                <input type="text" name="" id="" />
            </form>
            <h4>注意事項</h4>
            <div className="attention">
                <ol>
                    <li>按下下方按鈕送出後，可以提醒Home心小幫手趕快幫您審核唷！</li>
                    <li>需要小幫手審核通過後，才能再次接案。</li>
                </ol>
            </div>
            <div className="btn">
                <Link to="/memberInfo">     
                    <div className="back-btn">
                        <div className="arraw">
                            <img src={Arrow} alt="photo" />
                        </div>
                        <span>會員資料</span>
                    </div>
                </Link>
                <Link to="/memberInfo">     
                    <div className="submit-btn">
                        <span>下一步<br />
                        送出修改</span>        
                        <div className="arraw">
                            <img src={Arrow} alt="photo" />
                        </div>
                    </div>
                </Link>
            </div>


        </div>
      
    </div>
  )
}

export default ModifyInfo
