
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from './components/RegistrationPage'
import SelectCategory from './components/SelectCategory'
import Browse from './components/Browse';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">

      <Routes>

        <Route path='/' element={<RegistrationPage />} />
        <Route path='/select/category' element={<SelectCategory />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/dashboard' element = {<DashBoard />} />

      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
