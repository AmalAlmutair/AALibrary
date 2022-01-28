import "./App.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import { Route, Routes } from "react-router-dom";
import Members from "../src/components/Members";
import Books from "../src/components/Books";
// import MemberProfile from "./components/MemberProfile";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Members />} /> */}
        <Route path="/" element={<Books />} />

        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
