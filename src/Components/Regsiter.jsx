import { React, useState } from 'react'
import Navbar from './Navbar'
import '../styles/register.css'
import axios from 'axios'

const Regsiter = () => {
    const [data, setData] = useState({
        name: '',
        rollno: '',
        dept: '',
        year: '',
        hackerrank: '',
        coding_date: ''
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => {
            return { ...prev, [name]: value };
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/register', data)
            .then((data) => {
                if (data.status == 201) {
                    alert("Registered Succesfull");
                    setData({
                        name: '',
                        rollno: '',
                        dept: '',
                        year: '',
                        hackerrank: '',
                        coding_date: '',
                    })
                }
            })
            .catch((err) => {
                if (err.response.status == 300) {
                    alert("User Already Registered")
                }
            })
    }
    return (
        <>

            <Navbar />
            <div className='register'>
                <form id='register' onSubmit={handleSubmit}>
                    <h1>Register Now</h1>
                    <div className='input'>
                        <label>Enter Your Name:</label>
                        <input type='text' name='name' placeholder="Name" value={data.name} onChange={handleChange} />
                    </div>
                    <div className='input'>
                        <label>Enter Your RollNo:</label>
                        <input type='text' name='rollno' placeholder="Roll No" onChange={handleChange} value={data.rollno} />
                    </div>
                    <div className='input'>
                        <label>Enter Your Department:</label>
                        <input type='text' name='dept' placeholder="Department" onChange={handleChange} value={data.dept} />
                    </div>
                    <div className='input'>
                        <label>Select Your Year:</label>
                        <select name='year' onChange={handleChange} value={data.year}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className='input'>
                        <label>Enter Your Hackerrank Name:</label>
                        <input type='text' name='hackerrank' placeholder="Hackerrank Profile" onChange={handleChange} value={data.hackerrank} />
                    </div>
                    <div className='input'>
                        <label>Date of Event:</label>
                        <input type='date' name='coding_date' onChange={handleChange} value={data.coding_date} />
                    </div>
                    <div className='input'>
                        <input type='submit' />
                    </div>
                </form>
            </div>

        </>
    )
}

export default Regsiter
