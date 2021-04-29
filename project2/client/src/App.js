import './App.css';
import NameSearch from "./components/NameSearch";
import ReportingArea from "./components/ReportingArea";
import AgeSearch from "./components/AgeSearch";

function App() {
  return (
    <div className="App">
      <AgeSearch/>
      <NameSearch/>
      <ReportingArea/>
    </div>
  );
}

export default App;
