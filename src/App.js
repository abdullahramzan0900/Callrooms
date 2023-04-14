import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Project from './pages/Project/Project';
import {Profile} from './pages/Profile';
import Rooms from './pages/Rooms/Rooms';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import Calls from './pages/Calls/Calls';
// import SidebarNav from './components/Layout/DashboardContent/SidebarNav';

function App() {
  return (
    <>
    <Routes>
    <Route path='/Login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/register' element={<Register />} />
      <Route path='/project' element={<Project />} />
      <Route path='/Calls' element={<Calls/>} />
      <Route path='/rooms' element={<Rooms/>} />

    </Routes>
    </>
  );
}

export default App;
