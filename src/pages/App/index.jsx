import { BrowserRouter, useRoutes } from "react-router-dom";

import Home from "../Home";
import Services from "../Services";
import About from "../About";
import Contact from "../Contact";
import NotFound from "../NotFound";

import Navbar from "../../components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/services", element: <Services /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />  
      </BrowserRouter>
    </>
  );
}

export default App;
