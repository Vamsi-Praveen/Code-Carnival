import React from 'react'
import '../styles/coding.css'
import Navbar from './Navbar'
import Card from './Card'
import { useState } from 'react'
import axios from "axios"

const Coding = () => {
  const [winnerData, setWinnerData] = useState(null)
  const [runnerData, setRunnerData] = useState(null)

  const [data, setData] = useState({
    year: '',
    month: "",
    week: ''
  })
  const handleSubmitClick = (e) => {
    e.preventDefault();
    var keyword = '';
    Object.values(data).map((el) => {
      keyword += el
    })
    // setString(keyword);
    axios.get(`http://localhost:8000/coding/${keyword}`)
      .then((res) => {

        setWinnerData(res.data.winner)
        setRunnerData(res.data.runner)
      })

  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    })
  }
  return (
    <>
      <Navbar color={"#fff"} />
      <div className='coding'>
        <div className="controller">
          <form onSubmit={handleSubmitClick}>
            <div className="select-input">
              <label>Select Year</label>
              <select onChange={handleChange} name="year">
                <option>SELECT YEAR</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div className="select-input">
              <label>Select Month</label>
              <select onChange={handleChange} name="month">
                <option>SELECT MONTH</option>
                <option value={"01"}>JAN</option>
                <option value={"02"}>FEB</option>
                <option value={"03"}>MAR</option>
                <option value={"04"}>APR</option>
                <option value={"05"}>MAY</option>
                <option value={"06"}>JUNE</option>
                <option value={"07"}>JULY</option>
                <option value={"08"}>AUG</option>
                <option value={"09"}>SEP</option>
                <option value={"10"}>OCT</option>
                <option value={"11"}>NOV</option>
                <option value={"12"}>DEC</option>
              </select>
            </div>
            <div className="select-input">
              <label>Select Week</label>
              <select onChange={handleChange} name="week">
                <option>SELECT WEEK</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
              </select>
            </div>

            <input type='submit' value={"SUBMIT"} />
          </form>
        </div>
        <div className="coding-data">
          {winnerData && <Card name={winnerData.name} dept={winnerData.dept} image={winnerData.image} roll={winnerData.roll} />}
          {runnerData && <Card name={runnerData.name} dept={runnerData.dept} image={runnerData.image} roll={runnerData.roll} />}
        </div>
      </div>
    </>
  )
}

export default Coding
