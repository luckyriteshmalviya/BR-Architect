import { useState } from "react";
import { Link } from "react-router-dom";
import "../mainBody.css";
function FourthSection() {
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
    </>
  );
}

export default FourthSection;
