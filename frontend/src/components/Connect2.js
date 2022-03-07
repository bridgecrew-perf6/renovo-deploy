import React from 'react'
import logo from "../images/logo.jpg"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <div>
        <div className="middle text-center">
                    <div className="d-flex flex-row mb-3 align-items-center text-center row" style={{"height":"65vh"}}>
                        <div className="p-2 bd-highlight col-12">
                            <Link to="/connect3" className="homepage-box text-center d-flex align-items-center justify-content-center"  style={{"width":"25%","height":"30vh","margin":"auto","backgroundColor":"white","borderRadius":"15px","border":"0.5px solid #0153FD","textDecoration":"none"}}>
                                <h4 className="bluec">Connect with BMW i3 and transfer data?</h4>
                            </Link>
                           
                        </div>
                    </div>
                </div>
    </div>
  )
}
