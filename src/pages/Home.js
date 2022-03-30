import React, { useState } from 'react'
import Photo from './images/member-photo.png';
import HomeFeature from './HomeFeature'
import '../App.css';


const Home = () => {
  const [copySuccess, setCopySuccess] = useState('點我複製推薦碼');
  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('已複製！');
    } catch (err) {
      setCopySuccess('點我再試一次！');
    }
  };
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

      </main>
      <div className="code">
          <h3>我的推薦碼</h3>
          <p>我的推薦碼是Homexin1314520，快點一起來Home心接案賺錢吧！註冊成功還有100元可以領取唷！</p>
          <button onClick={() => copyToClipBoard('Homexin1314520')} className='copy-code'>{copySuccess}</button>                  
      </div>

    </div>
  )
}


export default Home
