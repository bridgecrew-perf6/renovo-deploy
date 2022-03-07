import React from 'react'
import logo from "../images/logo.jpg"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";
import Top from './Top'
import Bottom from './Bottom'

export default function Main(props) {
  return (
    <div>
        <div className="container">
                <Top title1={props.title1} title2={props.title2}/>
                <hr style={{"height":"0.5px","opacity":"0.2"}}/>
                <Bottom c={props.c}/>
            </div>
    </div>
  )
}
