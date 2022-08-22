import { Routes, Route, Navigate } from "react-router-dom";

//Styles
import "./App.css";

//Components
import Layout from "./components/Layout/Layout";

//Pages
import Login from "./pages/Login/Login";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import TaskPage from "./pages/TaskPage/TaskPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="login" element={<Login />} />
          <Route path="task" element={<TaskPage />} />
          <Route path="/" element={<Navigate to="/projects" />} />

          {/*PRIVATE ROUTES*/}
          <Route element={<RequireAuth />}>
            <Route path="projects" element={<ProjectsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
