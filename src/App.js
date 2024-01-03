import './App.css';
import Aside from "./Components/Aside/Aside";
import RightSide from "./Components/RightSide/RightSide";
function App() {
  return (
    <div className="App">
      <div className="section1">
        <Aside />
      </div>
      <div className="section2">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
