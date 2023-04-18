import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Project from './pages/Project/Project';
import Rooms from './pages/Rooms/Rooms';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import Calls from './pages/Calls/Calls';
import CallHistory from './pages/CallsHistory/CallHistory';

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/users' element={<Users />} />
        <Route path='/project' element={<Project />} />
        <Route path='/calls' element={<Calls/>} />
        <Route path='/call-history' element={<CallHistory/>} />
        <Route path='/rooms' element={<Rooms/>} />
      {/* </Route> */}
    </Routes>
    </>
  );
}

export default App;
