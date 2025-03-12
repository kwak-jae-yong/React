import React, { useState } from 'react'

const Ex2 = () => {

    const [text, setText] = useState('Hello')
    const onClickButton = () => {
        text==='Hello'? setText('GoodBye'):setText('Hello')
    }
    return (
        <div>
            <div>{text}</div>
            <button onClick={onClickButton}>click</button>
        </div>
    )
}

export default Ex2