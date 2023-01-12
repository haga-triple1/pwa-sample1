import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { useWebAppManifest } from './useWebAppManifest'
import manifest from "./manifest.webmanifest";
import sw from "./sw.js?url"

const App = () => {
  useWebAppManifest(manifest)
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(sw,{
        scope: "."
      });
    }
  },[])
  return <div>
    PWA Sample1
  </div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


