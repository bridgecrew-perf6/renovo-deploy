import React from 'react'
import logo from "../images/logo.jpg"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";

export default function Top(props) {
  return (
    <div>
        <div className="top p-5">
            <h1 className="bluec" style={{"fontWeight":"600"}}>{props.title1}</h1>
            <h6>{props.title2}</h6>
        </div>
    </div>
  )
}
