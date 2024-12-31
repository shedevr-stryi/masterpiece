import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { getSantaMessage } from '../../shared/utils/getSantaMessage'
import { API } from '../../shared/constants/api';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

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
      <Header />
      <main className="container mx-auto px-4">
        {message}
      </main>
      <Footer />
    </>
  )
}

export default App
