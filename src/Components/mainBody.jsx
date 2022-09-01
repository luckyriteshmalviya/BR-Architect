import { useEffect, useState } from "react";
import "./mainBody.css";
import MembersDetails from "./membersDetails";
import Projects from "./projects";

function MainBody() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  function saveData(e) {
    e.preventDefault();
    const payload = {
      userName: details.name,
      UserEmail: details.email,
      UserSubject: details.subject,
      UserComment: details.comment,
    };

    const savedDetails = JSON.parse(localStorage.getItem("details")) || [];
    localStorage.setItem("details", JSON.stringify([...savedDetails, payload]));
    setDetails({ name: "", email: "", subject: "", comment: "" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  return (
    <>
      <div className="firstSection">
        <img
          style={{ width: "80em" }}
          src="./src/assets/BR-Architect.jpg"
          alt="Background-Image"
        />
      </div>
      <div className="secondSection">
        <h3>Projects</h3>
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
      <div className="thirdSection">
        <h2>About</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
        <div>
          <MembersDetails />
        </div>
      </div>
      <div className="fourthSection">
        <h2>Contact</h2>
        <div>Lets get in touch and talk about your next project.</div>
        <form>
          <input
            className="contact"
            type="text"
            name="name"
            value={details.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            className="contact"
            type="email"
            name="email"
            value={details.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            className="contact"
            type="text"
            name="subject"
            value={details.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <input
            className="contact"
            type="text"
            name="comment"
            value={details.comment}
            onChange={handleChange}
            placeholder="Comment"
          />
          <br />
          <br />
          <button onClick={saveData}>Send Message</button>
        </form>
      </div>
      <div className="fifthSection">
        <img style={{ width: "94%" }} src="./src/assets/Last Image.jpg" />
      </div>
    </>
  );
}
export default MainBody;
