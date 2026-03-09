import Banner from "./components/Banner/index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Global from "./styles/Global";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Footer />
      <Global />
    </div>
  );
}

export default App;
