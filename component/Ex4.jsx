import "./Ex4.css"
import React,{useState} from 'react'

const Ex4 = () => {
const [isActive,setIsActive]=useState(false)
const toggleClass=()=>{
    setIsActive(!isActive)
    console.log(isActive);
}
  return (
    <div className={`container ${isActive? 'active':''}`}>
        <a href="#" className="toggle-btn" onClick={toggleClass}>
            <span></span>
            <span></span>
            <span></span>
        </a>
        <div className="toggle-box">{isActive? 'toggle-box-open':'toggle-box-closed'}</div>
        <div></div>
    </div>
    
  )
}

export default Ex4