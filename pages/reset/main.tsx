import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import sw from "../../src/assets/sw.js?url"

const App = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration(sw).then(e => {
            e?.unregister();
        })
    }
  },[])
  return <div>
    Reset Service Worker
  </div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  
