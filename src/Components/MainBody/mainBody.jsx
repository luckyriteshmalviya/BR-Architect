import { useState } from "react";
import "./mainBody.css";
import MembersDetails from "../membersDetails";
import Projects from "../projects";
import { Link } from "react-router-dom";

function MainBody() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  function saveData(e) {
    e.preventDefault();
    if (details.name && details.email && details.subject && details.comment) {
      const payload = {
        userName: details.name,
        UserEmail: details.email,
        UserSubject: details.subject,
        UserComment: details.comment,
      };

      const savedDetails = JSON.parse(localStorage.getItem("details")) || [];
      localStorage.setItem(
        "details",
        JSON.stringify([...savedDetails, payload])
      );
      setDetails({ name: "", email: "", subject: "", comment: "" });
      document.getElementById("viewQueries").style.display = "block";
    } else {
      alert("Please fill all the input fields");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  return (
    <>
      <div className="firstSection">
        <img
          className="backgroundColor"
          src="./src/assets/BR-Architect.jpg"
          alt="Background-Image"
        />
        <div className="firstSectionText">
          <span
            style={{
              backgroundColor: "black",
              opacity: "0.66",
              color: "white",
              padding: "0.4em",
              fontSize: "2.2em",
              fontFamily: "800",
            }}
          >
            BR
          </span>
          <span
            style={{ color: "white", fontSize: "2.2em", marginLeft: "0.4em" }}
          >
            Architects
          </span>
        </div>
      </div>
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
      <div className="thirdSection">
        <div className="aboutHeading">About</div>
        <div className="about">
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
        <div className="contactHeading">Contact</div>
        <div style={{ paddingBottom: "0.6em", fontSize: "1.2em" }}>
          Lets get in touch and talk about your next project.
        </div>
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
          <div className="buttons">
            <button className="sendMsgBtn" onClick={saveData}>
              Send Message
            </button>
            <Link
              to="/queries"
              className="sendMsgBtn"
              id="viewQueries"
              style={{ display: "none", textDecoration: "none" }}
            >
              View Queries
            </Link>
          </div>
        </form>
      </div>
      <div className="fifthSection">
        <img style={{ width: "92vw" }} src="./src/assets/Last Image.jpg" />
      </div>
    </>
  );
}
export default MainBody;
