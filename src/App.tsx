import "./App.css";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Hero />
    </>
  );
}

export default App;
