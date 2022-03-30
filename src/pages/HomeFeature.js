import React, { Component } from 'react'
import Info from './images/button01.png';
import Salary from './images/button02.png';
import Mission from './images/button03.png';


const HomeFeature = () => {
    const [show, toggleShow] = React.useState(false);
    let [name, setName] = React.useState("");
    const changeName = (n) => {
        toggleShow(!show);
        setName(n);
    }
    const Notice = () => (

        <section className='notice'>
            <div className="dialog">
                <div className="close"></div>
                <h4>哎呀!<br />本頁面還沒有開放!</h4>
                <h5>敬請期待{name}頁面的上線!</h5>
            </div>
        </section>  
    )
    return (
        <div className="feature">
            <div className='row'>
                <div className="info">
                    <img src={Info} alt="Info" />
                    <h3>會員資訊</h3>
                </div>
                <div className="salary" onClick={() => changeName("薪水查詢")}>
                    <img src={Salary} alt="Salary" />
                    <h3>薪水查詢</h3>
                    {show && <Notice />}
                </div>
            </div>
            <div className="mission" onClick={() => changeName("平台任務")}>
                <img src={Mission} alt="Mission" />
                <h3>平台任務</h3>
            </div>
      </div>
    )    
  }

export default HomeFeature

