import { BrowserRouter, useRoutes } from "react-router-dom";

import Home from "../Home";
import Services from "../Services";
import About from "../About";
import Contact from "../Contact";
import NotFound from "../NotFound";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Component para manejar las rutas
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
    <BrowserRouter>
      {/* Estructura general de la página */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar en la parte superior */}
        <Navbar />
        
        {/* Contenido principal que ocupa todo el espacio disponible */}
        <main className="flex-grow">
          <AppRoutes />
        </main>
        
        {/* Footer al final */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
