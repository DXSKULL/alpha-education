import "./assets/App.css";
import FirstCounter from "./components/FirstCounter";
import SecondCounter from "./components/SecondCounter";
import ThirdCounter from "./components/ThirdCounter";

function App() {
  

  return (
    <div className="app">
      <div className="counter-grid">
        <FirstCounter />
        <SecondCounter/>
        <ThirdCounter/>
      </div>
    </div>
  );
}

export default App;
