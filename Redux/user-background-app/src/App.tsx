import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { setColor } from './background'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.background.color);

  return (
    <>
      <div>
        <div className='backDiv' style={{backgroundColor: color}}>
          <h1 >Новый фон</h1>
          <input type="color" value={color} onChange={(e) => dispatch(setColor(e.target.value))}/>
        </div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
