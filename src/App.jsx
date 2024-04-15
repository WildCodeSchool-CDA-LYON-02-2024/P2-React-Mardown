import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTheme } from "./hooks/useTheme.jsx";

function App() {
    const [ count, setCount ] = useState(0)
    const { theme, toggleTheme } = useTheme();
  return (
      <div>
          <nav>
              <button onClick={() => toggleTheme({
                  backgroundColor: "#FFF",
                  textColor: "#000",
                  linkColor: "#00F",
                  codeBackgroundColor: "#C9C9C9",
              })}>Light
              </button>
              <button onClick={() => toggleTheme({
                  backgroundColor: "#000",
                  textColor: "#FFF",
                  linkColor: "#f38408",
                  codeBackgroundColor: "#ba0505",
              })}>Dark</button>
              <button onClick={() => toggleTheme({
                  backgroundColor: "#5e00ff",
                  textColor: "#000",
                  linkColor: "#cbff00",
                  codeBackgroundColor: "#00ffa1",
              })}>Purple</button>
          </nav>
          <textarea style={{backgroundColor: theme.backgroundColor, color: theme.textColor}}></textarea><br/>
          <code style={{backgroundColor: theme.codeBackgroundColor}}>git pull();</code>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a><br/>
              <a style={{color: theme.linkColor}}>
                  Click me
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </div>
  )
}

export default App
