import React from 'react'
import './WordGame.scss'

const WordGame = ({firstWord}) => {
    console.log(firstWord)
  return (
    <div className='game-container'>
 <h2>끝말잇기 게임</h2>      
 <p className="current-word">{firstWord}</p>
 <input type="text" />
 <button>확인</button>
 <p className='message'>끝말잇기 시작</p>
    </div>
  )
}

export default WordGame