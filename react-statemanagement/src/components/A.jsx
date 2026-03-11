import React, { useRef } from 'react'
import { useContext } from 'react'
import {CounterContext} from '../contexts/CounterContext.js'
import { UserContext } from '../contexts/UserContext.js'
import { useEffect } from 'react'

function A() {
  

  let {counter1,changeCounter1} = useContext(CounterContext)
  let {user,onChangeUser} = useContext(UserContext)
  useEffect(() => {
    
  },[])
  console.log('a is redered')
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
      <p className="text-3xl font-bold mb-4 text-blue-700">Component A</p>
      <p className="text-3xl mt-10 text-purple-700">Counter1: {counter1}</p>
      <button
        onClick={changeCounter1}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 mt-5 shadow-md transition duration-200"
      >
        Change Counter1
      </button>
      <p className="text-3xl mt-10 text-pink-700">UserName: {user.name}</p>
      <button
        onClick={onChangeUser}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded p-2 w-24 mt-5 mr-5 shadow-md transition duration-200"
      >
        User
      </button>
    </div>
  )
}


export default A