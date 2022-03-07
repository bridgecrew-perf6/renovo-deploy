import React from 'react'
import logo from "../images/logo.jpg"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";

export default function Top(props) {
  return (
    <div>
        <div className="top p-5">
            <h1 className="bluec" style={{"fontWeight":"600","fontSize":"4.5vh"}}>{props.title1}</h1>
            <h6 style={{"fontSize":"2.5vh"}}>{props.title2}</h6>
        </div>
    </div>
  )
}
