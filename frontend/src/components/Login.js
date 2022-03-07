import React, {  Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/homepage.css"
import renovo_logo from "../images/logo-black.png"
import bgReono from "../images/bg.png"
//import fetch from 'node-fetch';

const LoginUser = () => {
  const [inputs, setInputs] = useState(
    {
      email:"",
      password:""
    }
  );

  const { email, password } = inputs;
  

  const onChange = e =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });


  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {  email, password  };
      const response = await fetch("http://localhost:5000/",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
        
      });

      const parseRes = await response.json();

      console.log("result is" + parseRes);

      console.log(response);
    } catch(err){
      console.error(err.message);
    }
  

};
  return (
  <Fragment>
  <div className="container" style={{"display":"contents"}}>
  
    <div className="row flex-lg-row-reverse align-items-center" style={{"width":"100.5%"}}>
      
      <div className="div1 col-10 col-sm-8 col-lg-5" style={{"margin":"0","padding":"0"}}>
        <img src={bgReono} className="d-block ms-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" style={{"width":"95%","height":"100vh"}}/>
      </div>
      <div className="div2 col-lg-7 text-center" style={{"padding":"0 30vh","marginTop":"15vh"}}>
      <img src={renovo_logo} alt="" style={{"width":"16vh","height":"4vh","marginTop":"-18vh"}}/>
        <h1 style={{"fontSize":"5vh","fontWeight":"600","textAlign":"start"}}>Log in</h1>
        <h4 className="mb-5" style={{"fontSize":"2.5vh","fontWeight":"400","textAlign":"start"}}>Welcome to the Automation of the Circular Industry</h4>
        <main className="form-signin">
            <form onSubmit={onSubmitForm} style={{"width":"100%"}} style={{"display":"contents"}}>
                <div className="form-floating">
                <p className="text-start"  style={{"fontSize":"2.5vh"}}>Email</p>
                <input type="email" className="form-control my-3" id="floatingInput" placeholder="name@example.com" onChange={e => onChange(e)} style={{"height":"6.5vh","fontSize":"2.5vh"}}/>
                {/* <label for="floatingInput">Email</label> */}
                </div>
                <div className="form-floating">
                <p className="text-start" style={{"fontSize":"2.5vh"}}>Password</p>
                <input type="password" className="form-control my-3" id="floatingPassword" placeholder="********" onChange={e => onChange(e)}  style={{"height":"6.5vh","fontSize":"2.5vh"}}/>
                {/* <label for="floatingInput">Email</label> */}
                </div>
                <p className="bluec text-end blue-color fw-bold" role="button" style={{"fontSize":"14px"}}>Forgot your password?</p>
                <Link to="/homepage" className="w-100 btn btn-lg mb-3 text-white" style={{"height": "6vh","backgroundColor": "#0153FD","marginTop":"20px","fontSize":"2.5vh"}} type="submit">Sign In
              </Link>
                <Link to="/create-new-account" className="w-100 btn btn-lg mt-3 mb-5" type="submit" style={{"height": "6vh","backgroundColor":"white","color":"black","border":"1.5px solid #EBEFF2","fontSize":"2.5vh"}}>Create an account</Link>
            </form>
        </main>
      </div>
    </div>
  </div>
  </Fragment>)
}

export default LoginUser;
