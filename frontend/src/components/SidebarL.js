import logo from "../images/logo.jpg"
import React from 'react'
import css from "../components/homepage.css"
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";

export default function Sidebar() {
  return (
    <div>
        <div>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white" style={{"height":"100vh","backgroundColor":"","backgroundColor":"#0153FD"}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={logo} alt="" style={{"width":"50%","borderRadius":"4px","margin":"0 10px"}}/>
                <span className="fs-4">Renovo</span>
            </a>
            
            <ul className="nav nav-pills flex-column mb-auto" style={{"position":"absolute","top":"30vh"}}>
            <li>
                <a href="#" className="nav-link active text-white" aria-current="page">
                <MdDashboard style={{"fontSize":"22px","marginRight":"9px"}}/>
                Dashboard
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-white">
                <FaCarBattery style={{"fontSize":"22px","marginRight":"9px"}}/>
                Start the Process
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-white" >

                <BsPersonCircle style={{"fontSize":"22px","marginRight":"9px"}}/>
                Profile Settings
                </a>
            </li>
            
            <li>
                <a href="#" className="nav-link text-white">
                <FaClipboardList style={{"fontSize":"22px","marginRight":"9px"}}/>
                Historic Report
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-white">
                <IoMdChatboxes style={{"fontSize":"22px","marginRight":"9px"}}/>
                FAQ
                </a>
            </li>
            </ul>
            
            <div className="dropdown" style={{"position":"absolute","top":"85vh"}}>
                <ul style={{"listStyle":"none"}}>
                    <li style={{"margin":"10px 0","cursor":"pointer"}}>
                    <BsPersonCircle style={{"fontSize":"22px","marginRight":"9px"}}/>
                    <strong>Oliver Smith</strong>
                    </li>
                    <li style={{"margin":"10px 0","cursor":"pointer"}}>
                    <MdLogout style={{"fontSize":"22px","marginRight":"9px"}}/>
                    <strong>Log Out</strong>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}
