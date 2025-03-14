import FocusInput from "./components/FocusInput"
import Counter from "./components/Counter"
import ClickLogger from "./components/ClickLogger"
import InputTracker from "./components/InputTracker"

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
