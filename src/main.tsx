import React, { useEffect, useState } from 'react'
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
  const [installPropmpt,setInstallPropmpt] = useState<any | null>(null)
  useEffect(() => {
    window.addEventListener("beforeinstallprompt",(e) => {
      e.preventDefault;
      setInstallPropmpt(e);
    })
  },[])
  return <div>
    PWA Sample1
    {installPropmpt && <button onClick={() => installPropmpt.prompt()}>install</button>}
  </div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


