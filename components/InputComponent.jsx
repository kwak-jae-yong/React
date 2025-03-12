import React from 'react'

const InputComponent = ({ title }) => {

    
    const onClickButton=()=>{
        
        console.log(title);
    }


    return (
        <div>
           <input type="text" value={title} readOnly placeholder='type something'/>
           <button onClick={onClickButton}>click</button>
        </div>
    )
}

export default InputComponent