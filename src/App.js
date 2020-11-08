import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
