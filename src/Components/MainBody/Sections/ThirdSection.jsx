import MembersDetails from "../Organisms/membersDetails";
import "../mainBody.css";
function ThirdSection() {
  return (
    <>
      <div className="thirdSection" id="thirdSection">
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
    </>
  );
}
export default ThirdSection;
