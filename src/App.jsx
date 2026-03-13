import { Fragment } from "react/jsx-runtime";
import Global from "./styles/Global";
import RouterApp from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContexProvider } from "./context/AppContext";

function App() {
  return (
    <Fragment>
      <AppContexProvider>
        <RouterApp />
      </AppContexProvider>
      <Global />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
