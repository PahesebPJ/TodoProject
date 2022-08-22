import { useState } from "react";
import useAuth from "../../hooks/useAuth";

//Styles
import "./ProjectsPage.css";

//Components
import ProjectList from "../../components/ProjectList/ProjectList";
import InputModal from "../../components/Modals/InputModal/InputModal";

//hooks
import useGet from "../../hooks/useGet";

//Config
import inputs from "../../config/inputs";

function ProjectsPage() {
  const { auth } = useAuth();
  const URL_PROJECT = `project/${auth.id}`;
  const [searchProjectInput, setsearchProjectInput] = useState("");

  const { data } = useGet(URL_PROJECT);

  return (
    <div className="project-container">
      <h1>Projects</h1>
      <input
        className="project-input"
        type="text"
        placeholder="Search Project"
        onChange={(e) => setsearchProjectInput(e.target.value)}
      />
      <ProjectList projects={data} searchInput={searchProjectInput} />
      <InputModal title="Update Project" inputs={inputs.updateProjectInputs} />
    </div>
  );
}

export default ProjectsPage;
