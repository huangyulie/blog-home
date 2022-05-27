import React,{useEffect} from 'react'
import {DownOutlined} from '@ant-design/icons'
import Screen from '../../components/screen'
import './scss/Home.scss'

export default function Home() {
    const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 })
 
    const windowChange = () => {
        const width = window.scrollX
        const height = window.scrollY
        setWindowSize({ width, height })
        // console.log(height)
    }
 
    useEffect(() => {
        windowChange()
        window.addEventListener('scroll', windowChange)
 
        return () => {
            window.removeEventListener('scroll', windowChange)
        }
    }, [])

  return (
    <div className='Home'>
        <div className='Home-top'>
            <div className='Top1'>
                <div className='Top1-1'>路漫漫其修远兮,任重而道远</div>
                <Screen 
                    href={["page"]}
                    content={[
                        <div className='Top1-2'>点击进入独行长路 <DownOutlined className='Down'/></div>
                    ]}
                />
            </div>
        </div>
        <div className='Home-page' id='page'>
            <div className="Home-blog">弥勒Miroku的博客</div>
            <div className='Home-show'>
                <div className='Home-show-blog'>1</div>
                <div className='Home-show-blog'>1</div>
                <div className='Home-show-blog'>1</div>
                <div className='Home-show-blog'>1</div>
                <div className='Home-show-blog'>1</div>
            </div>
        </div>
    </div>
  )
}
