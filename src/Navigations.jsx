import { Routes, Route } from "react-router-dom";
import App from "./App";
import Feedbacks from "./Components/Feedbacks/Feedbacks";
import MembersDetails from "./Components/membersDetails";

function Navigations() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/people" element={<MembersDetails />}></Route>
        <Route path="/queries" element={<Feedbacks />}></Route>
      </Routes>
    </>
  );
}
export default Navigations;
