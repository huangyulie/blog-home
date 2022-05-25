
import React,{FC,useState,useEffect} from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Home1(){

  function data<T extends string|number>(a:T,b:T):T{
    return a;
  };
  data<number>(1,2);
  data<number|string>(1,'2');
  return (
    <div>
      点击
    </div>
  )
}
