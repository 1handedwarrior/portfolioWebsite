import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
const SkillsPage    = lazy(() => import('./pages/SkillsPage'))
const BiographyPage = lazy(() => import('./pages/BiographyPage'))
const ContactPage   = lazy(() => import('./pages/ContactPage'))


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/'          element={<HomePage />}></Route>
            <Route path='/skills'    element={<SkillsPage />}></Route>
            <Route path='/biography' element={<BiographyPage />}></Route>
            <Route path='/contact'   element={<ContactPage />}></Route>
        </Routes>
    </Suspense>
  )
}

export default App;
