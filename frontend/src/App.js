import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from './pages/user/Login'
// import Home from './pages/user/Home'
import Sample from "./components/Sample";


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sample/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
