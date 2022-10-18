import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { Navigation } from "./components/Navigation/Navigation.js";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Footer />
    </>
  );
}

export default App;
