import React from 'react'
import ReactDOM from 'react-dom/client'
import { useWebAppManifest } from '../../src/useWebAppManifest'
import manifest from "../../src/assets/manifest.webmanifest";

const App = () => {
  useWebAppManifest(manifest)
  return <div>
    Manifest Only
  </div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


