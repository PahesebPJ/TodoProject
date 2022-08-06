import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function ProjectsPage() {
  const { auth } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log(auth.id);
  }, []);

  return (
    <div className="container-task">
      <h1>Projects</h1>
    </div>
  );
}

export default ProjectsPage;
