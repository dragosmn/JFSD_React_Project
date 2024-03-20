import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import Home from './components/Home';


function App() {
  return (

    <BrowserRouter>
      <Header/>
      
      <Routes>
            <Route path='/' element={<Navigate to="/home" replace/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
