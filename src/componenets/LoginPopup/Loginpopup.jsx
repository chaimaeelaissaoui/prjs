import React,{useState} from 'react'
import { assets } from '../../assets/assets'
import "./Loginpopup.css"

const Loginpopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <from  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='your name' required />}
            <input type="email" placeholder='your email'required />
            <input type="password" placeholder='Password' required />
        </div>
        <button> {currState==="Sign Up"?"Create account":"Login"} </button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>bye con jhbdchj  sbcdh jcb  hbdshjb </p>
        </div>
        {currState==="Login"?  <p>Create a new  account?<span onClick={()=> setCurrState("Sign Up")}>Click here </span> </p>:
                <p>ALready have an account? <span onClick={()=> setCurrState("Login")}>Login here </span></p>}

      </from>
    </div>
  )
}

export default Loginpopup
