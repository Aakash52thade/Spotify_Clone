import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './utils/StateProvider.jsx'
import reducre, { initialState } from './utils/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <StateProvider initialState={initialState} reducre={reducre}>
     <App />
   </StateProvider>
  </React.StrictMode>,
)
