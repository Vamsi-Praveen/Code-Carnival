import React, { useState } from 'react'
import '../styles/Questions.css'
import Navbar from './Navbar'
import axios from "axios";

const Questions = () => {
    const [date,setDate] = useState()
    const [data,setData] = useState([])
    const handleSubmitClick = async(e) =>{
        e.preventDefault();
        try {
            await axios.get(`http://localhost:8000/questions/getbyid/${date}`)
            .then((res)=>{
                if(res.data.length!=0)
                {
                    setData(res.data)
                }
                else
                {
                    alert("No Data Found")
                    return false
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }
    console.log(data)
    return (
        <>
            <Navbar />
            <div className='questions'>
                <div className="controller-questions">
                    <form onSubmit={handleSubmitClick}>
                        <div className="select-input">
                            <label>Select Date of Event</label>
                            <input type='date' name="date" onChange={(e)=>{setDate(e.target.value)}}/>
                        </div>
                        <input type='submit' value={"Get Question Data"}/>
                    </form>
                </div>
                <div className="question-data">
                    <div className="data">
                        {
                            data.length!=0?(
                                Object.entries(data).map((el)=>{
                                    el[1].map((ele)=>{
                                        console.log(ele.marks)
                                    })
                                })
                            ):( 
                                <h3>Hello,&nbsp;Please Select the Date</h3>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Questions
