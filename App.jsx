import Button from './components/Button'

function App() {
  const buttonProps = {
    text:'홈',
    color:'green'
  }

  return (
    <div>
      <Button {...buttonProps}/>
      <Button text={'카페'} color={'red'}/>
      <Button text={'매일'} color={'blue'}/>
      <Button text={'이메일'} />

    </div>
  )
}

export default App
