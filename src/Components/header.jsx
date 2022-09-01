import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="leftSection">
        <div className="leftSectionOptions"> BR Architect</div>
      </div>
      <div className="rightSection">
        <div className="rightSectionOptions">Home</div>
        <div className="rightSectionOptions">People</div>
        <div className="rightSectionOptions">Contact</div>
      </div>
    </div>
  );
}

export default Header;
