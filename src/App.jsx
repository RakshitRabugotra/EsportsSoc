import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages for the app
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

    return (<div>
      <BrowserRouter basename="/EsportsSoc">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>);

}

export default App;
