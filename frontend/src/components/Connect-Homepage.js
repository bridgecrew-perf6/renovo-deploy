import React from 'react'
import logo from "../images/logo.jpg"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <div>
        <div className="middle text-center">
                    <div className="d-flex flex-row mb-3 align-items-center text-center row" style={{"height":"65vh"}}>
                        <div className="p-2 bd-highlight col-6">
                            <Link to="/connect1" className="homepage-box text-center d-flex align-items-center justify-content-center"  style={{"width":"50%","height":"30vh","margin":"auto","backgroundColor":"white","borderRadius":"15px","border":"0.5px solid #0153FD","textDecoration":"none"}}>
                                <h4 className="bluec">Proceed with the Car Analysis</h4>
                            </Link>
                            <p className="m-3 fw-bold">Connect the car with computer</p>
                        </div>
                        <div className="p-2 bd-highlight col-6">
                            <div className="homepage-box text-center d-flex align-items-center justify-content-center"  style={{"width":"50%","height":"30vh","margin":"auto","backgroundColor":"white","borderRadius":"15px"}}>
                                <h4 className="bluec">Check Historic Reports</h4>
                            </div>
                            <p className="m-3 fw-normal">See the reports of the other processes</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}
