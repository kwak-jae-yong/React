import FocusInput from "./components/FocusInput"
import Counter from "./components/Counter"
import ClickLogger from "./components/ClickLogger"
import InputTracker from "./components/InputTracker"
import './App.css'

function App() {

  return (
    <div>
      <InputTracker/>
      {<ClickLogger/>}
      {<Counter/> }
      {<FocusInput/>}

    </div>
  )
}

export default App
