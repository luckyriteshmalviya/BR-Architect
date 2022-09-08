import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="leftSection">
        <div className="leftSectionOptions">
          <b>BR</b> <span>Architect</span>
        </div>
      </div>
      <div className="rightSection">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="#firstSection"
          className="rightSectionOptions"
        >
          Home
        </a>
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="#thirdSection"
          className="rightSectionOptions"
        >
          People
        </a>
        <a
          className="rightSectionOptions"
          style={{ textDecoration: "none", color: "black" }}
          href="#fourthSection"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
