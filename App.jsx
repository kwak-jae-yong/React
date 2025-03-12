import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Ex3 from './component/Ex3'
import Ex4 from './component/Ex4'

function App() {
  const userInfo = {
    name: "Elice",
    age: 20,
    city: "seoul"
  }

  return (
    <div>
      <Ex4 />
      <Ex3 />
      <Ex1 {...userInfo} />
      <Ex2 />
    </div>
  )
}

export default App
