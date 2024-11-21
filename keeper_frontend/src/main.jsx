import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './routes/Test'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test />
  </StrictMode>,
)
