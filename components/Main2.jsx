import React from 'react'
import './Main2.css'
const Main2=()=>{

    const user={
        name:'kwak',
        isLogin:false
      }
      if(user.isLogin){
        return(
            <div className='login'>{user.name}은 로그인했습니다</div>
        )
      }else{
        return(
            <div className='logout'>{user.name}은 로그아웃했습니다</div>
        )
      }

 }
export default Main2