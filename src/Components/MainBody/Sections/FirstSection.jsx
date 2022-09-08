import "../mainBody.css";
function FirstSection() {
  return (
    <>
      <div className="firstSection" id="firstSection">
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
    </>
  );
}
export default FirstSection;
