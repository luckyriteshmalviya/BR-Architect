import { useEffect, useState } from "react";
import "./mainBody.css";
import MembersDetails from "./membersDetails";
import Projects from "./projects";

function MainBody() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [input, setInput] = useState({});

  function saveData() {
    setInput({
      userName: name,
      UserEmail: email,
      UserSubject: subject,
      UserComment: comment,
    });
    console.log(input);
    localStorage.setItem("details", JSON.stringify(input));
    setComment("");
    setEmail("");
    setName("");
    setSubject("");
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <input
            className="contact"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            className="contact"
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            placeholder="Subject"
          />
          <input
            className="contact"
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
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
