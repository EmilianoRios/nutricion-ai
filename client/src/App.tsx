import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppPublicRoutes from './routes/Public/AppPublicRoutes'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<strong>Loading...</strong>}>
          <AppPublicRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
