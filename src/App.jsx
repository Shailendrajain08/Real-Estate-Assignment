import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './Components/Authentication/SignUp/SignUpForm'
import Login from './Components/Authentication/Login/Login'
import Unauthorized from './module/Unauthorized';
import ProtectedRoute from './module/ProtectedRoute';
import Admin from './Components/Admin Home/Admin';
import Agent from './Components/Agent Home/Agent';
import User from './Components/User Home/User';

function App() {

  return (
    <>
      <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['agent']} />}>
          <Route path="/agent" element={<Agent />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
