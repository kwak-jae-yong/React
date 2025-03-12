import "./Ex1.css"
import React from 'react'

const Ex1 = ({name, age,city}) => {
  console.log(name, age ,city);

    return(
    <div>
        <p>
            나의 이름은 <span className="name">{name}</span>이고 나이는 <span className="age">{age}</span> 고 사는곳은 <span className='city'>{city}</span>입니다
        </p>
    </div>
  )
}
export default Ex1
