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
      <div className="details">
        <div className="name">{name}</div>
        <div className="profile">{profile}</div>
        <div>{detail}</div>
        <div>
          <button className="btn">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
