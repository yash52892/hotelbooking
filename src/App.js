import Header from './Header';
import Footer from './Footer';
import Auth from './Auth/Auth';
import Admin from './Admin/Admin';
import Add from './Admin/Add/Add';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { Route, Routes, Navigate} from "react-router-dom";

function App() {
  const tok = localStorage.getItem("Token");
  return (
    <>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Auth />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Signup/>} />
        <Route path="/admin" element={tok ? (<Admin />) : (<Navigate to="/login"/>)} />
        <Route path="/admin/addcatagories" element={tok ? (<Add />) : (<Navigate to="/login"/>)} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
