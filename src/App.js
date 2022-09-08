
import './App.css';
import Main from './components/main';
import Book from './components/booking';
import { Routes, Route } from "react-router-dom"


function App() {
 return (
    <>
    <Routes>
     <Route exact path='/' element={<Main/>}/>
     <Route path='/booking' element={<Book/>}/>
    </Routes>
      
    </>
    
  );
}

export default App;
