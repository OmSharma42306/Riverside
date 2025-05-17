import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Receiver from './pages/Receiver';
import Sender from './pages/Sender';
import { Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

function App() {
  
  return (
    <Routes>
      <Route path='/' element=<Landing></Landing>></Route>
      <Route path='/sender' element=<Sender/>></Route>
      <Route path='/receiver' element=<Receiver/>></Route>
      <Route path='/login' element=<Login></Login>></Route>
      <Route path='/signup' element=<Signup></Signup>></Route>
      <Route path='/dashboard' element=<Dashboard></Dashboard>></Route>

    </Routes>
  )
}

export default App
