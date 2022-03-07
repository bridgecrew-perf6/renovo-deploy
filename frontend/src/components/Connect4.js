import React from 'react'
import logo from "../images/logo.jpg"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";


export default function Bottom() {
  return (
    <div>
        <div className="middle text-center">
                    <div className="d-flex flex-row mb-3 align-items-center text-center row" style={{"height":"65vh"}}>
                        <div className="p-2 bd-highlight col-12">
                            <Link to="/connect4" className="text-center d-flex flex-column align-items-center justify-content-center"  style={{"textDecoration":"none"}}>
                            <BsFillCheckCircleFill style={{"fontSize":"115px","margin":"20px","color":"#27a727"}}/>
                                <h4 className="bluec" style={{"fontWeight":"700"}}>Connected.</h4>
                            </Link>
                        </div>
                    </div>
                </div>
    </div>
  )
}
