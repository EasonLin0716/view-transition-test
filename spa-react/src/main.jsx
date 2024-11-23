import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import HomeView from './views/HomeView.jsx'
import AboutView from './views/AboutView.jsx'
import ContactView from './views/ContactView.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="contact" element={<ContactView />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
