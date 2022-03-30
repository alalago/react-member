import './App.css';
import Home from './pages/Home';
import MemberInfo from'./pages/MemberInfo';
import ModifyInfo from'./pages/ModifyInfo';
import { BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="memberInfo" element={<MemberInfo />} />
        <Route path="modifyInfo" element={<ModifyInfo />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
