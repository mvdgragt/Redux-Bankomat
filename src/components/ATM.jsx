import { useState } from 'react'
import Uttag from './Uttag'
import Insattning from './Insattning'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const ATM = () => {
  const { saldo } = useSelector((state) => state.banksaldo)
  const [showInsattning, setShowInsattning] = useState(true)

  const handleShowInsattning = () => {
    return setShowInsattning(!showInsattning)
  }

  return (
    <>
      <div className="col saldo">
        <h1>saldo:</h1>
        <hr />
        <h2>{saldo} SEK</h2>
      </div>

      <div className="container ">
        <div className="row ">
          {!showInsattning && (
            <button className="btnn" onClick={handleShowInsattning}>
              Uttag
            </button>
          )}
          {showInsattning && (
            <button className="btnn" onClick={handleShowInsattning}>
              Insättning
            </button>
          )}
          {showInsattning && <Uttag />}
          {!showInsattning && <Insattning />}
        </div>
      </div>
    </>
  )
}

export default ATM
