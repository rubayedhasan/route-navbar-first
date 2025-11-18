import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import PriceOptions from "./components/PriceOptions/PriceOptions.jsx";

function App() {
  return (
    <>
      {/* navbar section component: NavBar  */}
      <NavBar></NavBar>

      <h1 className="text-2xl bg-red-200">Navbar</h1>

      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
