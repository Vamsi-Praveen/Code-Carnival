import React from 'react'
import '../styles/coding.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'

const Coding = () => {
  return (
    <>
      <Navbar color={"#fff"} />
      <div className='coding'>
        <div className="controller">
          <form>
            <div className="select-input">
              <label>Select Year</label>
              <select>
                <option>SELECT YEAR</option>
                <option>2023</option>
              </select>
            </div>
            <div className="select-input">
              <label>Select Month</label>
              <select>
                <option>SELECT MONTH</option>
                <option>JAN</option>
                <option>FEB</option>
                <option>MAR</option>
                <option>APR</option>
                <option>MAY</option>
                <option>JUNE</option>
                <option>JULY</option>
                <option>AUG</option>
                <option>SEP</option>
                <option>OCT</option>
                <option>NOV</option>
                <option>DEC</option>
              </select>
            </div>
            <div className="select-input">
              <label>Select Week</label>
              <select>
                <option>SELECT WEEK</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <input type='submit' value={"SUBMIT"} />
          </form>
        </div>
        <div className="coding-data">
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  )
}

export default Coding
