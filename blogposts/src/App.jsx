import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { CustomContext } from './CustomContext'
import AppLayOut from './AppLayOut'
import Page from './Page'

function App() {
  return (
    <CustomContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayOut />} />
          <Route path="/:id" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </CustomContext>
  )
}

export default App
