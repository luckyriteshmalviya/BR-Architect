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
        <div className="rightSectionOptions">Home</div>
        <div className="rightSectionOptions">
          <Link to="/people" style={{ textDecoration: "none", color: "black" }}>
            People
          </Link>
        </div>
        <div className="rightSectionOptions">Contact</div>
      </div>
    </div>
  );
}

export default Header;
