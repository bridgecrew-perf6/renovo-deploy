import React from 'react'
import logo from "../images/logo.jpg"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";
import logo1 from "../images/connectHomepageLogo-1.png"
import logo2 from "../images/connectHomepageLogo-2.png"

export default function Bottom() {
  return (
    <div>
        <div className="middle text-center">
                    <div className="d-flex flex-row mb-3 align-items-center text-center row" style={{"height":"60vh"}}>
                        <div className="p-2 bd-highlight col-6">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center"  style={{"textDecoration":"none"}}>
                                <img src={logo2} alt="" style={{"width":"28vh","height":"33vh","margin":"5vh"}}/>
                                <Link to="/connect2" type="button" className="btn" style={{"backgroundColor":"#0153FD","color":"white","width":"60%","height":"6vh","margin":"4vh","fontSize":"3vh"}}>Proceed to Car Analysis</Link>
                                <p className="text-black">Connect the car with the computer</p>
                            </div>
                        </div>
                        <div className="p-2 bd-highlight col-6">
                        <div className="text-center d-flex flex-column align-items-center justify-content-center"  style={{"textDecoration":"none"}}>
                                <img src={logo1} alt="" style={{"width":"33vh","height":"33vh","margin":"5vh"}}/>
                                <Link to="/connect2" type="button" className="btn" style={{"backgroundColor":"#0153FD","color":"white","width":"60%","height":"6vh","margin":"4vh","fontSize":"3vh"}}>Check the Historic Reports</Link>
                                <p className="text-black">See the reports of the previous processes</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}




