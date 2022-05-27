import React from 'react'
import './App.scss';
import Header from './containers/Header/Header';
// import {Routes,Route} from 'react-router-dom'
import Routes from './route/route'
const Home = require('./public/video/hone.mp4');

export default function App() {
  return (
    <div>
      <Header />
      <article>
        <Routes/>
      </article>
      <footer>footer</footer>
      <video id="v1" autoPlay loop muted>
        <source src={Home} type="video/mp4" />
      </video>
    </div>
  )
}
