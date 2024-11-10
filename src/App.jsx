import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Nav from './sections/Nav';
import Hero from './sections/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative'>
      <section>
        <Nav />
      </section>
      <section>
        <Hero/>
      </section>

    </main>
  )
}

export default App
