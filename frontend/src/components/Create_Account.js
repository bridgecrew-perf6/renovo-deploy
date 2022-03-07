import React, { Fragment, useState} from 'react';
import "../App.css";
<<<<<<< HEAD
import renovo_logo from "../images/logo-black.png";
import "../components/homepage.css"
import { Link } from "react-router-dom";
import bgReono from "../images/bg.png";
=======
import "../components/homepage.css"
import { Link } from "react-router-dom";
import renovo_logo from "../images/logo-black.png"
import bgReono from "../images/bg.png"
>>>>>>> f02387f1eb81b0a8b9391eacc21510a770cf0b7f



const InputUser = () => {
  const [inputs, setInputs] = useState(
    {
      name:"",
      email:"",
      password:"",
      re_pass:""
      
    }
  );

  const { name , email, password, re_pass } = inputs;

  const onChange = e =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });


  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name , email, password, re_pass };
      const response = await fetch("http://localhost:5000/create-new-account",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response);

      const k = (response.ok);
      if(k==true){
        window.location.href = "/Homepage";
      } else console.log("result is false");

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
    <div className="div2 col-lg-7 text-center" style={{"padding":"0 30vh","marginTop":"100px"}}>
    <img src={renovo_logo} alt="" style={{"width":"130px","height":"33px","marginTop":"-150px"}}/>
      <h1 className="mb-5" style={{"fontSize":"40px","fontWeight":"600","textAlign":"start"}}>Create an account</h1>
      {/* <h4 className="mb-5" style={{"fontSize":"20px","fontWeight":"400","textAlign":"start"}}>Welcome to the Automation of the Circular Industry</h4> */}
      <main className="form-signin">
      <form onSubmit={onSubmitForm}  style={{"width":"100%"}} >
                <div className="form-floating">
                <p className="text-start fs-5" style={{"fontSize":"20px"}}>Full Name</p>
                <input name="name" type="text" className="form-control my-3" id="floatingInput" placeholder="Full Name" autoComplete="username"
                onChange={e => onChange(e)}  style={{"height":"6.5vh","fontSize":"20px"}}/>
                {/* <label for="floatingInput">Email</label> */}
                </div>
                <div className="form-floating">
                <p className="text-start fs-5" style={{"fontSize":"20px"}}>Email</p>
                <input name="email" type="text" className="form-control my-3" id="floatingName" placeholder="name@example.com"
                onChange={e => onChange(e)}  style={{"height":"6.5vh","fontSize":"20px"}}/>
                {/* <label for="floatingInput">Email</label> */}
                </div>
                <div className="form-floating">
                <p className="text-start fs-5" style={{"fontSize":"20px"}}>Set Password</p>
                <input name="password" type="password" className="form-control my-3" id="floatingPassword" placeholder="********" 
                onChange={e => onChange(e)}  style={{"height":"6.5vh","fontSize":"20px"}}/>
                {/* <label for="floatingInput">Email</label> */}
                </div>
                <div className="form-floating">
                <p className="text-start fs-5" style={{"fontSize":"20px"}}>Confirm Password</p>
                <input name="re_pass" type="password" className="form-control my-3" id="floatingRe_pass" placeholder="********" 
                onChange={e => onChange(e)}  style={{"height":"6.5vh","fontSize":"20px"}}/>
                {/* <label for="floatingInput">Email</label> */}
                </div>
<<<<<<< HEAD
                <button className="bluec w-100 btn btn-lg my-3 text-light" style={{"height": "50px","backgroundColor": "#0153FD","marginTop":"20px"}} type="submit">Create Account</button>
=======
                <Link to="/homepage" className="bluec w-100 btn btn-lg my-3 text-light" style={{"height": "50px","backgroundColor": "#0153FD","marginTop":"20px"}} type="submit">Create Account</Link>
>>>>>>> f02387f1eb81b0a8b9391eacc21510a770cf0b7f
            </form>
      </main>
    </div>
  </div>
</div>
  </Fragment>)
};

export default InputUser;