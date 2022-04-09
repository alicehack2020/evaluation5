import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Employees from './components/Employees';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeEdit from './components/EmployeeEdit';
import NotFount from './components/NotFount';
import EmployeeAdd from './components/EmployeeAdd';
function App() {
  return (
    <div>
    <Header /> 
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Register" element={<Register />} />
       <Route path="Employees" element={<Employees />} />
       <Route path="EmployeeAdd" element={<EmployeeAdd />} />
       <Route path='/Employees/:prodId' element={<EmployeeDetail/>} />
       <Route path='/Employees/:prodId/edit' element={<EmployeeEdit/>} />
       <Route path='*' element={<NotFount/>} />
     </Routes>
    </div>
  );
}

export default App;
