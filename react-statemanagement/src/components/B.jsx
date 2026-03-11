import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { UserContext } from '../contexts/UserContext'
import {useTest} from  '../store/TestStore.js'

function B() {

  const x = useTest(state => state.x)
  const incrementX = useTest(state => state.incrementX)
  const decrementX = useTest(state => state.decrementX)
  const incrementXByValue = useTest(state => state.incrementXByValue)
  const Newuser = useTest(state => state.user)
  const UpdateUser = useTest(state => state.updateUser)


  let {counter1, changeCounter1} = useContext(CounterContext)
  let {user, changeUser} = useContext(UserContext)
  console.log('B rendered')
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
      <h2 className="text-3xl font-bold mb-4 text-blue-700">B Component</h2>
      <p className="text-3xl mt-10 text-purple-700">Counter1: {counter1}</p>
      <p className="text-3xl mt-10 text-pink-700">User name: {user.name}</p>
      <p className="text-xl mt-4 text-gray-700">email: {user.email}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 mr-5 shadow-md transition duration-200" onClick={changeCounter1}>Change Counter1</button>
      <button onClick={changeUser} className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 shadow-md transition duration-200">Change User</button>
      <p className="mt-6  text-gray-800 text-2xl">x: {x}</p>
      <p className="text-2xl text-gray-800">userName :{Newuser.name}</p>
      <p className="text-2xl text-gray-800">age:{Newuser.age}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 mr-5 shadow-md transition duration-200" onClick={incrementX}>Increment X</button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 mr-5 shadow-md transition duration-200" onClick={decrementX}>Decrement X</button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 mr-5 shadow-md transition duration-200" onClick={() => incrementXByValue(20)}>Increment x by value</button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 shadow-md transition duration-200" onClick={() => UpdateUser("arjunn")}>UpdateUser</button>
    </div>
  )
}

export default B