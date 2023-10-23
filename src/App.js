import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'

import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/" element={<Navigate to="/Signup" />} />
      </Routes>
    </div>
  );
}

export default App;
