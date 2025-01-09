import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { StoreProvider } from './app/providers/StoreProvider'
import '@/app/styles/index.scss'
import { App } from './app/App'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Container root not found')
}

const root = createRoot(container)
root.render(
  <BrowserRouter>
    {/* <StoreProvider> */}
    <App />
    {/* </StoreProvider> */}
  </BrowserRouter>,
)
