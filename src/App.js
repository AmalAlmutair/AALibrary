import logo from "./logo.svg";
import "./App.css";
import MembersList from "./components/MembersList";
import AddMememberModal from "./modals/AddMememberModal";

function App() {
  return (
    <div className="App">
      <AddMememberModal />
      <MembersList />
    </div>
  );
}

export default App;
