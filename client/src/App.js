
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminBooks from './views/AdminBooks';
import CreateBooks from './views/CreateBooks';
import Detail from './views/Detail';
import EditBooks from './views/EditBooks';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:id" element={<Detail/>}/>
        <Route path="/admin" element={<AdminBooks/>}/>
        <Route path="/admin/create" element={<CreateBooks/>}/>
        <Route path="/admin/:id" element={<EditBooks/>}/>
      </Routes>
    </div>
  );
}

export default App;
