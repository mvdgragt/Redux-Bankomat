import { useDispatch, useSelector } from 'react-redux'
import { changeByAmount } from '../redux/banksaldo'
import '../App.css'

const Uttag = () => {
  const dispatch = useDispatch()
  const { saldo } = useSelector((state) => state.banksaldo)

  const nyttSaldo = (e) => {
    if (saldo >= -e) {
      dispatch(changeByAmount(e))
    }
  }

  const submit = () => {
    const summa = -document.querySelector('#summa').value
    if (saldo >= -summa) {
      dispatch(changeByAmount(summa))
    }
  }

  return (
    <div className="saldo">
      <h1>Välj ditt uttag</h1>
      <button
        type="button"
        className="btnn"
        onClick={() => {
          nyttSaldo(-100)
        }}>
        100
      </button>
      <button
        type="button"
        className="btnn"
        onClick={() => {
          nyttSaldo(-200)
        }}>
        200
      </button>
      <button
        type="button"
        className="btnn"
        onClick={() => {
          nyttSaldo(-500)
        }}>
        500
      </button>
      <button
        type="button"
        className="btnn"
        onClick={() => {
          nyttSaldo(-1000)
        }}>
        1000
      </button>

      <input type="number" id="summa" placeholder="egen summa" />
      <button className="btnn" onClick={submit}>
        submit
      </button>
    </div>
  )
}

export default Uttag
