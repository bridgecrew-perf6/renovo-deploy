import React from 'react'
import logo from "../images/logo.jpg"
import personLogo from "../images/person-logo.png"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

export default function Bottom() {
  return (
    <div style={{"width":"100%"}}>
        <div className="middle d-flex flex-row mb-3 align-items-center row px-5" style={{"height":"65vh"}}>
            <h6 style={{"fontSize":"2.5vh"}}>If needed here are some useful resources to get started.</h6>
            <div className="div1">
                <h1 className="" style={{"fontWeight":"600","fontSize":"4vh"}}>Learn how to use</h1>
                <div className="d-flex flex-row align-items-center row" style={{"height":"10vh"}}>
                    <div className="p-2 bd-highlight col-4">
                                <Link to="/" className="homepage-box text-center d-flex align-items-center justify-content-center"  style={{"width":"75%","height":"12vh","backgroundColor":"white","textDecoration":"none"}}>
                                    <div className="d-flex flex-row align-items-center row" style={{"height":"10vh"}}>
                                        <div className="col-2">
                                            <img src={personLogo} alt="" style={{"height":"10vh","padding":"2vh"}}/></div>
                                        <div className="col-9 d-flex flex-column align-items-center row text-start" style={{"marginLeft":"4vh"}}>
                                            <div className="text-secondary" style={{"fontWeight":"600","fontSize":"1.5vh"}}>PRODUCT WALKTHROUGH</div>
                                            <div className="text-black" style={{"fontWeight":"600","fontSize":"2vh"}}><strong>Onboarding</strong></div>
                                        </div>
                                        
                                    </div>
                                </Link>
                    </div>
                    <div className="p-2 bd-highlight col-4">
                                <Link to="/" className="homepage-box text-center d-flex align-items-center justify-content-center"  style={{"width":"75%","height":"12vh","backgroundColor":"white","textDecoration":"none"}}>
                                    <div className="d-flex flex-row align-items-center row" style={{"height":"10vh"}}>
                                        <div className="col-2">
                                            <img src={personLogo} alt="" style={{"height":"10vh","padding":"2vh"}}/></div>
                                        <div className="col-9 d-flex flex-column align-items-center row text-start" style={{"marginLeft":"4vh"}}>
                                            <div className="text-secondary" style={{"fontWeight":"600","fontSize":"1.5vh"}}>PRODUCT DEMO</div>
                                            <div className="text-black" style={{"fontWeight":"600","fontSize":"2vh"}}><strong>Product Overview</strong></div>
                                        </div>
                                        
                                    </div>
                                </Link>
                    </div>
                    <div className="p-2 bd-highlight col-4">
                                <Link to="/" className="homepage-box text-center d-flex align-items-center justify-content-center"  style={{"width":"75%","height":"12vh","backgroundColor":"white","textDecoration":"none"}}>
                                    <div className="d-flex flex-row align-items-center row" style={{"height":"10vh"}}>
                                        <div className="col-2">
                                            <img src={personLogo} alt="" style={{"height":"10vh","padding":"2vh"}}/></div>
                                        <div className="col-9 d-flex flex-column align-items-center row text-start" style={{"marginLeft":"4vh"}}>
                                            <div className="text-secondary" style={{"fontWeight":"600","fontSize":"1.5vh"}}>LEARN IN DETAILS</div>
                                            <div className="text-black" style={{"fontWeight":"600","fontSize":"2vh"}}><strong>Documentation</strong></div>
                                        </div>
                                        
                                    </div>
                                </Link>
                    </div>
                </div>
            </div>
            <div className="div2">
            <h1 className="" style={{"fontWeight":"600","fontSize":"4vh"}}>Ready to Start?</h1>
            <div className="d-flex flex-row align-items-center row" style={{"height":"10vh"}}>
                    <div className="p-2 bd-highlight col-10">
                    <h6 style={{"fontSize":"2.5vh"}}>If you are already familiar with the process, continue to car connection. </h6>
                    </div>
                    <div className="p-2 bd-highlight col-2">
                    <Link to="/connect1" type="button" className="btn btn-primary" style={{"backgroundColor":"#0153FD"}}>Continue</Link>
                    </div>
            </div>
            </div>
        </div>        
    </div>
  )
}

{/* <div className="d-flex flex-row mb-3 align-items-center text-center row" style={{"height":"65vh"}}>
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
                </div> */}




