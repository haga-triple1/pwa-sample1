import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { useWebAppManifest } from '../../src/useWebAppManifest'
import manifest from "../../src/assets/manifest-sw.webmanifest";
import sw from "../../src/assets/sw.js?url"

const App = () => {
  useWebAppManifest(manifest)
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(sw,{
        scope: "/pwa-sample1/pages/manifest-sw"
      });
    }
  },[])
  return <div>
    Manifest + Service Worker
  </div>
}



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


