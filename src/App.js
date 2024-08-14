import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Home /></>} />
          {/* <Route path='/blog' element={<><Navbar/><Blog /></>} /> */}
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
