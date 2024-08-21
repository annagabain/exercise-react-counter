import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>My Counter</h1>

        <div id='current-count'>
          <h2> {count}</h2>


        </div>

        <div className='card-buttons'>

          <button onClick={() => setCount((count) => count - 1)}>
            -
          </button>
          <button onClick={() => setCount((count) => count + 1)}>
            +
          </button>

          <button onClick={() => setCount(0)}>
            reset
          </button>
        </div>



      </div>

    </>
  )
}

export default App
