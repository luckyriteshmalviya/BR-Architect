import { Link } from "react-router-dom";
import "./Queries.css";

function Queries() {
  let setDetails = JSON.parse(localStorage.getItem("details"));

  return (
    <>
      <h2>Queries :-</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Comment</th>
          </tr>
          {setDetails.map((item) => (
            <tr key={new Date().getTime()}>
              <td>{item.userName}</td>
              <td>{item.UserEmail}</td>
              <td>{item.UserSubject}</td>
              <td>{item.UserComment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" className="GoToHomeBtn">
        Go Back to Home
      </Link>
    </>
  );
}

export default Queries;
