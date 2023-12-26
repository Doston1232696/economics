import React from 'react'
import "./Css/LoginSignup.css"
import git_icon from "../Assets/github-fill.png"
import google_icon from "../Assets/google-fill.png"
const LoginSignup = () => {
  return (
   <>
   <div className='loginsignup'>
    <div className='loginsignup-container'>
      <h1>Signup</h1>
      <div className='loginsignup-fields'>
        <input type="text" placeholder='Your name' />
        <input type="email" placeholder='Your Address' />
        <input type="password" placeholder='Password' />
      </div>
      <button>Continue</button>
      <div className='signup-icons'>
        <p>Signup With </p>
        <img src={git_icon} alt="" />
        <img src={google_icon} alt="" />
      </div>
      
      <p className='loginsignup-login'>Already have an accaunt? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="ckeckbox" name='' placeholder='Checkbox'id='' />
        <p>By continuting, i agree to the terms of use & privacy police</p>
      </div>
    </div>

   </div>
   </>
  )
}

export default LoginSignup