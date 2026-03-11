// import Banner from "./components/Banner/index";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
// import Imobi2 from "./pages/Imobi2";
// import Home from "./pages/Home";
import Global from "./styles/Global";
function App() {
  return (
    <div>
      <Header />
      <Cadastro />
      {/* <Imobi2 /> */}

      {/* <Banner />
      <Home /> */}
      <Footer />
      <Global />
    </div>
  );
}

export default App;
