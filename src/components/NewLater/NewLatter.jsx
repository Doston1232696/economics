import React, { useState } from 'react'
import "./NewLatter.css"
import axios from 'axios'
const NewLatter = () => {
  const [text, setText] = useState("")
  const token = "6338030284:AAF4zFYloslgjVj1LRCcDTNmSNpcrl-qExs"
  const chat_id =  5480822681
  const api = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`
  const SendMessage = (e) => {
    axios.get(api)
  }
  return (
    <>
    <div className='newslatter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newlatter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => SendMessage()}>Subscribe</button>
        </div>
    </div>
    </>
  )
}

export default NewLatter