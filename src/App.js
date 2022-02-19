import "./App.css";
import Home from "./components/Home";
import MidSection from "./components/MidSection";
import Nav from "./components/Nav";
import RightSection from "./components/RightSection";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Home />
        <MidSection />
        <RightSection />
      </div>
    </>
  );
}

export default App;
