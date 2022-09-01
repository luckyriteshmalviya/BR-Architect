import "./teamMember.css";
function TeamMember({ url, name, profile, detail }) {
  return (
    <div style={{ width: "300px" }}>
      <div>
        <img style={{ width: "300px" }} src={url} alt="Team Members" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <b>{name}</b>
        </div>
        <div style={{ color: "grey" }}>{profile}</div>
        <div>{detail}</div>
        <div>
          <button style={{ width: "100%" }}>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
