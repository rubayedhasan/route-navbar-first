import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-2xl bg-red-200">Navbar</h1>

      <div className="hover-3d">
        {/* content */}
        <figure className="max-w-100 rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/creditcard.webp"
            alt="3D card"
          />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
