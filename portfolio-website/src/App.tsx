import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { BiographyPage } from './pages/BiographyPage';
import { ContactPage } from './pages/ContactPage';


function App() {
  return (
    <>
      <Routes>
          <Route path='/'          element={<HomePage />}></Route>
          <Route path='/skills'    element={<SkillsPage />}></Route>
          <Route path='/biography' element={<BiographyPage />}></Route>
          <Route path='/contact'   element={<ContactPage />}></Route>
      </Routes>
    </>
  )
}

export default App;
