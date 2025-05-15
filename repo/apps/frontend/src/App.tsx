import { Route,Routes } from 'react-router-dom'
import Sender from '../pages/Sender';
import Receiver from '../pages/Receiver';
import './App.css'

function App() {
  
  return (
    <>
    <Routes>
    <Route path='/sender' element={<Sender/>}></Route>  
    <Route path='/receiver' element={<Receiver/>}></Route>      
    </Routes>   
    
    </>
  )
}

export default App
