import React from 'react'

// const Button = (props) => {
//     console.log(props.text);

//     return (
//         <button style={{color:props.color}}>{props.text}</button>
//     )
// }
const Button = ({ text, color='gray' ,children=null}) => {


    return (
        <button style={{ color: color }}>
            {text}-{color.toUpperCase()}
            {children}
        </button>
    )
}

export default Button