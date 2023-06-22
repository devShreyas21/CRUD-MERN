import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import CodeSmashers from './components/CodeSmashers';
import EditUser from './components/EditUser'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />   
      <Routes>  
        <Route path="/" element={<CodeSmashers/>} />
        <Route path="/alluser" element={<AllUser />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
