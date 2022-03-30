import React from 'react'
import Photo from './images/member-photo.png';
import HomeFeature from './HomeFeature'
import '../App.css';


const Home = () => {
  
  return (
    <div className="App">
      <header>
        <div className='member-photo'><img src={Photo} alt="photo" /></div>
        <div className="member-name"><h1>李姍姍</h1><p>上線中</p></div>
      </header>
      <main>
        <div className='announcement'>
          <h2>Home心公告</h2>
          <hr />
          <ul>
            <li>疫情期間，大家要多注意勤洗手，小心健康！</li>
            <li>若您已經施打完疫苗，可以透過小幫手回報給我們唷！</li>
          </ul>
        </div>
        <HomeFeature />

        {/* <div className="feature">
          <div className='row'>
            <div className="info">
              <img src={Info} alt="Info" />
              <h3>會員資訊</h3>
            </div>
            <div className="salary" data-title="薪水查詢">
              <img src={Salary} alt="Salary" />
              <h3>薪水查詢</h3>
            </div>
          </div>
          <div className="mission" data-title="平台任務">
            <img src={Mission} alt="Mission" />
            <h3>平台任務</h3>
          </div>
        </div> */}
      </main>
      <div className="code">
          <h3>我的推薦碼</h3>
          <p>我的推薦碼是Homexin1314520，快點一起來Home心接案賺錢吧！註冊成功還有100元可以領取唷！</p>
          <button className='copy-code'>點我複製推薦碼</button>        
      </div>

    </div>
  )
}


export default Home
