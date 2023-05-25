import "./App.scss";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login.jsx";
import Signup from "./views/Signup/Singup";
import Finances from "./views/Finances/Finances";
import News from "./views/News/News";
import { Routes, Route } from "react-router-dom";
import SearchDisease from "./views/A-Z/Search";
import Resource from "./views/Resource/Resource";
import Medicine from "./views/Medicines/Medicine";
import Pay from "./views/Pay/Pay";
import Comments from "./views/Comments/Comments";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/news" element={<News />} />
        <Route path="/disease" element={<SearchDisease />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
