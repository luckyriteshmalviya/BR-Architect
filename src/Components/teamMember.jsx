import "./teamMember.css";
function TeamMember({ url, name, profile, detail }) {
  return (
    <div style={{ width: "310px" }}>
      <div>
        <img
          style={{ width: "310px", filter: "grayscale(60%)" }}
          src={url}
          alt="Team Members"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{ fontFamily: "700", fontSize: "1.5em", marginTop: "0.4em" }}
        >
          {name}
        </div>
        <div style={{ color: "grey", fontSize: "1em" }}>{profile}</div>
        <div>{detail}</div>
        <div>
          <button
            style={{
              width: "100%",
              border: "none",
              fontSize: "1.2em",
              backgroundColor: "lightgrey",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
