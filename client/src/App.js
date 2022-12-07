
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminBooks from './views/AdminBooks';
import CreateBooks from './views/CreateBooks';
import Detail from './views/Detail';
import EditBooks from './views/EditBooks';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import { UserProvider } from "./contexts/userContext";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/:id" element={<Detail/>}/>
          <Route path="/admin" element={<AdminBooks/>}/>
          <Route path="/admin/create" element={<CreateBooks/>}/>
          <Route path="/admin/:id" element={<EditBooks/>}/>
        </Routes>

      </UserProvider>
      <Footer/>
    </div>
  );
}

export default App;
