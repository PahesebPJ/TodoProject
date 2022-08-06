import { Routes, Route } from "react-router-dom";

//Styles
import "./App.css";

//Components
import Layout from "./components/Layout/Layout";

//Pages
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="login" element={<Login />} />

          {/*PRIVATE ROUTES*/}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
