import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTheme } from "./hooks/useTheme.jsx";
import { Form } from "./stories/Form.jsx";

function App() {
    const [ count, setCount ] = useState(0)
    const { theme, toggleTheme } = useTheme();
  return (
      <div>
          <Form
              backgroundColor={ theme.backgroundColor }
              textColor={ theme.textColor }
              linkColor={ theme.linkColor }
              codeBackgroundColor={ theme.codeBackgroundColor }
              toggleTheme={ (val) => toggleTheme(val) } />
          {/*<SidebarLayout />*/}
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
