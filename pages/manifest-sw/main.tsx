import React from 'react'
import ReactDOM from 'react-dom/client'
import { useWebAppManifest } from '../../src/useWebAppManifest'
import manifest from "../../src/assets/manifest-sw.webmanifest";

const App = () => {
  useWebAppManifest(manifest)
  return <div>
    Manifest + Service Worker
  </div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


