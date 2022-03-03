import logo from "../images/logo.jpg"
import React from 'react'
import css from "../components/homepage.css"
import Main from "../components/Main"
import Sidebar from "./SidebarL"
import { Link } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';

export default function Homepage(props) {
  return (
    <div className="row" style={{"backgroundColor":"#F0F3F6"}}>
        <div className="div1 col-lg-2 col-md-4">
            <Sidebar/>
        </div>
        <div className="div2 col-lg-10 col-md-8">
            <Main title1={props.title1} title2={props.title2} c={props.c}/>       
        </div>
    </div>
  )
}
