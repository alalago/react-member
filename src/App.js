import './App.css';
import Home from './pages/Home';
import MemberInfo from'./pages/MemberInfo';
import ModifyInfo from'./pages/ModifyInfo';
import { HashRouter, Routes, Route,} from "react-router-dom";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="memberInfo" element={<MemberInfo />} />
        <Route path="modifyInfo" element={<ModifyInfo />} />
      </Routes>
  </HashRouter>
  );
}

export default App;
