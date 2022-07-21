import "./App.css";
import Login_page from "./components/Login_page";
import {Routes,Route} from 'react-router-dom'
import MyAdmin from "./components/admin/MyAdmin";
import Tilxat from "./components/admin/murojat/Tilxat";
function App() {
  return (
    <>
    <div className="top">
      <div>
        <Routes>
          <Route index path='/' element={<Login_page/>} />
          <Route path="/admin" element={<MyAdmin/>} />
        </Routes>
        
      </div>
    </div>
    </>
  );
}

export default App;
