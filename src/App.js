import './App.css';
import HomeLayout from './Components/Layout/HomeLayout';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Class1 from './Components/Pages/Class1';

function App() {
  return (
    <>
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomeLayout/>}/>
   <Route path="/class1" element={<Class1/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
