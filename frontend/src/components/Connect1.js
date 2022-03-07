import React from 'react'
import logo from "../images/logo.jpg"
import css from "../components/homepage.css"
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import logo1 from "../images/connect11.png"
import logo2 from "../images/connect12.jpg"
import logo3 from "../images/connect13.png"

export default function Bottom() {
  function start(){
      setInterval(setConnect1, 1000);
  }
  function next(){

  }
  function setConnect1(){
    document.getElementById("connect1").style.backgroundColor="#22C55E"
    document.getElementById("connect1").style.color="white"
    setInterval(setConnect2, 1000);
  }
  function setConnect2(){
    document.getElementById("connect2").style.backgroundColor="#22C55E"
    document.getElementById("connect2").style.color="white"
    setInterval(setConnect3, 1000);
  }
  function setConnect3(){
    document.getElementById("connect3").style.backgroundColor="#22C55E"
    document.getElementById("connect3").style.color="white"
    document.getElementsByClassName("btn-next")[0].style.backgroundColor="#0153FD"
    document.getElementsByClassName("btn-next")[0].style.pointerEvents="auto"

    
  }
  return (
    <div style={{"width":"100%"}}>
        <div className="middle d-flex flex-row mb-3 align-items-center row px-5" style={{"height":"65vh"}}>
          <div className="div1">
            <h6 style={{"fontSize":"2.5vh"}}><strong>If needed here are some useful resources to get started.</strong></h6>
            <h5 style={{"fontSize":"2.5vh"}}>If needed here are some useful resources to get started.</h5>
          </div>
            
            <div className="div2">
            <div className="d-flex flex-row mb-3 align-items-center text-center row" style={{"height":"40vh"}}>
                        <div className="p-2 bd-highlight col-4">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center"  style={{"textDecoration":"none"}}>
                                <img src={logo1} alt="" style={{"width":"20vh","height":"25vh","margin":"3vh 0"}}/>
                                <p className="text-black">Connect the car with the computer</p>
                            </div>
                        </div>
                        <div className="p-2 bd-highlight col-4">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center"  style={{"textDecoration":"none"}}>
                                <img src={logo2} alt="" style={{"width":"40vh","height":"25vh","margin":"3vh 0"}}/>
                                <p className="text-black">Connect the car with the computer</p>
                            </div>
                        </div>
                        <div className="p-2 bd-highlight col-4">
                        <div className="text-center d-flex flex-column align-items-center justify-content-center"  style={{"textDecoration":"none"}}>
                                <img src={logo3} alt="" style={{"width":"40vh","height":"25vh","margin":"3vh 0"}}/>
                                <p className="text-black">See the reports of the previous processes</p>
                            </div>
                        </div>
                    </div> 
              
            </div>
            <div className="div3">
            <h1 className="" style={{"fontWeight":"600","fontSize":"4vh"}}>Ready to Start?</h1>
            <div className="d-flex flex-row align-items-center row" style={{"height":"10vh"}}>
              <button onClick={start} type="button" className="btn btn-primary col-1" style={{"backgroundColor":"#0153FD"}}>Start</button>
              <BsCheckLg className="connected-tick col-1" id="connect1"/>
              <hr className="connected-dash col-3"/>
              <BsCheckLg className="connected-tick col-1" id="connect2"/>
              <hr className="connected-dash col-3"/>
              <BsCheckLg className="connected-tick col-1" id="connect3"/>
              <Link to="/" onClick={next} type="button" className="btn-next btn col-1 disabled-link" style={{"color":"white"}}>Next</Link>
            </div>
            </div>
        </div>        
    </div>
  )
}



