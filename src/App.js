
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/Signup" element={<SignUp/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
