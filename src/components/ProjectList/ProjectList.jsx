import React from "react";

//Styles
import "./ProjectList.css";

//Icons
import { FaPen, FaTrash } from "react-icons/fa";

function ProjectList({ projects, searchInput }) {
  return (
    <ul className="project-list">
      {projects
        .filter((value) => {
          return value.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        .map((project) => {
          return (
            <li className="list-element" key={project.id}>
              <img
                className="project-list__image"
                src={project.picture}
                alt={project.name}
              />
              <p>{project.name}</p>
              <div className="list-element-actions">
                <FaPen style={{ color: "#15aabf" }} />
                <FaTrash style={{ color: "#fa5252" }} />
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProjectList;
