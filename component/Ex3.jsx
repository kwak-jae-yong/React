import React, { useState } from 'react'

const Ex3 = () => {

const [input, setInput]=useState('')

const onChangeInput=(e)=>{
setInput(e.target.value)
}
const onClickChange=()=>{
setInput('')
}

    return (
        <div>
            <h1>실습</h1>
            <input type="text" 
            value={input}
            onChange={onChangeInput}/>
            <p>{input}</p>
            <button onClick={onClickChange}>click 하면 글씨 사라짐</button>
        </div>
    )
}

export default Ex3