import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import ModeContextProvider from './Context/Mode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <ModeContextProvider>
        <App />
    </ModeContextProvider>
    </ShopContextProvider>
   
  </React.StrictMode>,
)
