import React from 'react'
import {NavLink} from 'react-router-dom';
import {AlignRightOutlined ,RedditOutlined,HomeOutlined,ReadOutlined,PlaySquareOutlined,SmileOutlined,LoginOutlined} from '@ant-design/icons';
import './scss/Header.scss';

export default function Header() {
    return (
        <div>
            <header>
                <div className='header-left'><RedditOutlined />弥勒Blog</div>
                <div className='header-mid'></div>
                <div className='header-right'>
                    <div className='header-big'>
                        <div className='header-big-l'>
                            <NavLink to='home' className='header-right-home'><HomeOutlined /> 首页</NavLink>
                            <NavLink to='blog' className='header-right-blog'><ReadOutlined /> 博客</NavLink>
                            <NavLink to='music' className='header-right-music'><PlaySquareOutlined /> 音乐</NavLink>
                            <NavLink to='game' className='header-right-game'><SmileOutlined /> 游戏</NavLink>
                            <NavLink to='login' className='header-right-login'><LoginOutlined /> 登录</NavLink>
                        </div>
                    </div>
                    <div className='header-small'>
                        <div className='header-small-l'>
                            <AlignRightOutlined />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
