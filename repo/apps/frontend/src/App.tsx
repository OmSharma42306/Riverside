import { Routes,Route } from 'react-router-dom'
import Sender from './components/Sender';
import Receiver from './components/Receiver';
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
