import { useState } from 'react'
import ATM from './components/ATM'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [showATM, setShowATM] = useState(true)

  const handleShowATM = () => {
    return setShowATM(!showATM)
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        {!showATM && (
          <button className="btn btn-light startATMButton" onClick={handleShowATM}>
            {showATM ? 'Start ATM' : 'Close ATM'}
          </button>
        )}
      </nav>
      {!showATM && <ATM />}
      {showATM && (
        <div className="row headerText">
          <div className="w-auto mx-auto">
            <h1>React Bankomat</h1>
            <button className="btn btn-dark startATMButton" onClick={handleShowATM}>
              {showATM ? 'Start ATM' : 'Close ATM'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
