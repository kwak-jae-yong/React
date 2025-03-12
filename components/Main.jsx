import React from 'react'

const Main=()=>{

    const name='alice'
    const age=25
    const number= [1,2,3]
    //const isLogin = true
    const isLogin = false
    
  

    return(
        <div>
          안녕 나는{name}이고
          {age}살이야
          {number}일동안 여기 지내고있어
          {isLogin?<p>로그인</p>:<p>로그아웃</p>}
        </div>
    )
}
export default Main