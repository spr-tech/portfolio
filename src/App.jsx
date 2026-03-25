import "./App.css";
import Info from "./components/Info";
import About from "./components/About";

const App = () => {
  return (
    <>
      <div className="app-container">
        <Info />
        <div className="main-content">
          <About />
        </div>
      </div>
    </>
  );
};

export default App;
