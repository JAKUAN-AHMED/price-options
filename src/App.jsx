import "./App.css";
import DaisyNav from "./components/DaIsyNav/DaisyNav";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl bg-rose-600">Vite+React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  );
}

export default App;
