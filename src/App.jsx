import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Question from "./Pages/Question";
import Ranked from "./Pages/Ranked";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/home/:id/rank" element={<Ranked />} />
          <Route path="/quest/:id/:questid" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
