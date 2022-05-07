import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Tutorial from "./components/Tutorial";
import Dashboard from "./components/Dashboard";
import Examhome from "./components/Examhome";
import Settings from "./components/Settings";
import Exam from "./components/Exam";

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <Tutorial />
      <Dashboard />
      <Examhome />
      <Settings />
      <Exam />
    </div>
  );
}

export default App;
