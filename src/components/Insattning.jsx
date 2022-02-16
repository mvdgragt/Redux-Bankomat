import { useDispatch } from 'react-redux'
import { changeByAmount } from '../redux/banksaldo'

const Insattning = () => {
  const dispatch = useDispatch()

  const submit = () => {
    const summa = +document.querySelector('#summa').value
    dispatch(changeByAmount(summa))
  }

  return (
    <div className="saldo">
      <h1>Välj ditt insatts</h1>
      <button
        type="button"
        className="btnn"
        onClick={() => {
          dispatch(changeByAmount(100))
        }}>
        100
      </button>
      <button
        type="button"
        className="btnn"
        onClick={() => {
          dispatch(changeByAmount(200))
        }}>
        200
      </button>
      <button
        type="button"
        className="btnn"
        onClick={() => {
          dispatch(changeByAmount(500))
        }}>
        500
      </button>
      <button
        type="button"
        className="btnn"
        onClick={() => {
          dispatch(changeByAmount(1000))
        }}>
        1000
      </button>
      <input type="number" id="summa" placeholder="egen summa" />
      <button type="button" className="btnn" onClick={submit}>
        submit
      </button>
    </div>
  )
}

export default Insattning
