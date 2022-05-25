import React from 'react'
import './App.scss';

export default function App() {
  return (
    <div>
      <header>
        <div className='header-left'>弥勒Blog</div>
        <div className='header-mid'></div>
        <div className='header-right'>
          <div className='header-big'>
            <div className='header-big-l'>
              <div className='header-right-home'>首页</div>
              <div className='header-right-blog'>博客</div>
              <div className='header-right-music'>音乐</div>
              <div className='header-right-game'>游戏</div>
              <div className='header-right-login'>登录</div>
            </div>
          </div>
          <div className='header-small'>
            <div className='header-small-l'>样式</div>
          </div>
        </div>
      </header>
      <article>article</article>
      <footer>footer</footer>
    </div>
  )
}
