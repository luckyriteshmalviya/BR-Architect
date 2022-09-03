import TeamMember from "./teamMember";

function MembersDetails() {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <TeamMember
        url={"./src/assets/teamMembers/memberOne.jpg"}
        name="John Doe"
        profile="CEO/FOUNDER"
        detail="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
      />
      <TeamMember
        url={"./src/assets/teamMembers/Jane Doe.jpg"}
        name="Jane Doe"
        profile="Architect"
        detail="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
      />
      <TeamMember
        url={"./src/assets/teamMembers/Dan Star.jpg"}
        name="Dan Star"
        profile="Architect"
        detail="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
      />
      <TeamMember
        url={"./src/assets/teamMembers/Mike Ross.jpg"}
        name="Mike Ross"
        profile="Architect"
        detail="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
      />
    </div>
  );
}

export default MembersDetails;
