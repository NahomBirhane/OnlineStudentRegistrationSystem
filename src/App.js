<<<<<<< HEAD

import "./App.css";
import AllRoutes from "./Router/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const isRestrictedPath = [
  "/login",
  "/register-user",
  "/admin-login",
  "/admin/admin"
].includes(location.pathname);

return (
  <div>
    {!isRestrictedPath && <Navbar />}
    <div style={{ minHeight: "90vh" }}>
      <AllRoutes />
    </div>
    {!isRestrictedPath && <Footer />}
  </div>
);

}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

>>>>>>> efaa905fd3801567521208eb61d836c5c10a342a
export default App;
