import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import {useTest} from '../store/TestStore'

function C() {

  //get state from zustand store
  const y = useTest(state => state.y)
  const incrementY = useTest(state => state.incrementY)
  
  //console.log(useTest(), x)

  const {counter1, changeCounter1} = useContext(CounterContext)
  console.log('C rendered')
  return (
    <div
      className="text-center shadow-2xl p-10"
      style={{
        borderRadius: '1.5rem',
        border: '2px solid ',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        maxWidth: '420px',
        margin: '2rem auto',
        transition: 'box-shadow 0.3s',
      }}
      onMouseOver={e => (e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(31, 38, 135, 0.25)')}
      onMouseOut={e => (e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.15)')}
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-700">C Component</h2>
      <p className="text-3xl mt-10 text-purple-700">Counter1: {counter1}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 shadow-md transition duration-200" onClick={changeCounter1}>Change Counter1</button>
      <p className="mt-6 text-lg text-gray-800">y: {y}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 shadow-md transition duration-200" onClick={incrementY}>Increment X</button>
    </div>
  )
}

export default C