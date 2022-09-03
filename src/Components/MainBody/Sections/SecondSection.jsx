import Projects from "../Organisms/projects";
import "../mainBody.css";
function SecondSection() {
  return (
    <>
      <div className="secondSection">
        <div className="projectHeading">Projects</div>
        <div className="projects">
          <Projects
            name="Summer House"
            image={"./src/assets/project-one.jpg"}
          />
          <Projects
            name="Brick House"
            image={"./src/assets/project-BrickHouse.jpg"}
          />
          <Projects
            name="Renovated"
            image={"./src/assets/project-Renovate.jpg"}
          />
          <Projects
            name="Barn House"
            image={"./src/assets/project-BarnHouse.jpg"}
          />
          <Projects
            name="Summer House"
            image={"./src/assets/project-one.jpg"}
          />
          <Projects
            name="Brick House"
            image={"./src/assets/project-BrickHouse.jpg"}
          />
          <Projects
            name="Renovated"
            image={"./src/assets/project-Renovate.jpg"}
          />
          <Projects
            name="Barn House"
            image={"./src/assets/project-BarnHouse.jpg"}
          />
        </div>
      </div>
    </>
  );
}
export default SecondSection;
