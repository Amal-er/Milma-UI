import Footer from "./components/Footer/Footer";
import Home from "./components/Homee/Home";
import Products from "./components/Homee/products/products";
import Shake from "./components/Homee/shake/shake";

function App() {
  return (
    <>
      <div className="w-screen ">
        <Home />
        <Shake />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
