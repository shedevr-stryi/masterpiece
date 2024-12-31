import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { getSantaMessage } from '../../shared/utils/getSantaMessage'
import { API } from '../../shared/constants/api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(API.HEALTH)
      .then(data => data.json())
      .then(data => {
        setMessage(data?.message);
        const msg = getSantaMessage('from client');
        console.log('msg', msg);
      })
  }, [])

  return (
    <>
      <div className='border border-red-600'>{message}</div>
    </>
  )
}

export default App
