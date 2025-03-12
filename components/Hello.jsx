import React from 'react'

const Hello = ({intro}) => {

    const onClickButton=(e)=>{
        console.log(intro,e)
    }
  return (
    <div>
      
        <p>집에 가고싶다 {intro}</p>
        <button onClick={onClickButton}>click</button>
        </div>
  )
}

export default Hello
