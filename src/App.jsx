import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import PriceOptions from "./components/PriceOptions/PriceOptions.jsx";

function App() {
  return (
    <>
      {/* navbar section component: NavBar  */}
      <NavBar></NavBar>

      {/* price option card section component: PriceOptions  */}
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
