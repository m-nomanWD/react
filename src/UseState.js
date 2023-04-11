import { useState } from 'react'
import './App.css'
const UseState = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <section>
        <h1>use State</h1>
        <h3>{value}</h3>
        <button
          className='btn'
          onClick={() => {
            setValue(value + 1)
          }}
        >
          click me
        </button>
      </section>
    </>
  )
}
export default UseState
