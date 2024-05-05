import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./components/Login";
import Signup from "./pages/Signup";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route index element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </BrowserRouter>;
};

export default App;
