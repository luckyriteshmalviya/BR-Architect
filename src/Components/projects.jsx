import "./mainBody.css";

function Projects({ name, image }) {
  return (
    <>
      <div className="projectImage">
        <div className="projectName">{name}</div>
        <img className="projectImages" src={image} alt="Projects" />
      </div>
    </>
  );
}

export default Projects;
