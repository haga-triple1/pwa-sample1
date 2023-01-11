import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import manifest from "./assets/manifest.webmanifest";

function App() {
  const [count, setCount] = useState(0);
  const [installable,setInstallable] = useState<boolean>(false);

  useEffect(() => {
    const listener : EventListenerOrEventListenerObject = (event) => {
      event.preventDefault();
      setInstallable(true);
    };
    window.addEventListener("beforeinstallprompt",listener)
    return () => {
      window.removeEventListener("beforeinstallprompt",listener)
    }
  },[setInstallable])
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "manifest";
    link.href = manifest;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    }
  },[])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/pwa-sample1/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {installable && <p>このアプリはインストール可能です。</p>}
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
    </div>
  )
}

export default App
