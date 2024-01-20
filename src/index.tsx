import React from 'react'
import Root from './components/root'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)

const App: React.FC = () => {
  return <Root />
}

root.render(<App />)
