import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Order from "./pages/Order/Order";
import Contact from "./pages/Contact/Contact";
import Cookies from "./pages/Cookies/Cookies";
import Questions from "./pages/Questions/Questions";
import "./app.scss";
import { motion, AnimatePresence } from "framer-motion";
import AboutUs from "./pages/About/AboutUs";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";



const Layout = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [loading, setLoading] = useState(false);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <AnimatePresence>
      {loading ? (
        <div style={style}>
          <PulseLoader
            color={"#c9a0a8"}
            loading={loading}
            size={30}
            margin={8}
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.1 }}
          className="app"
        >
          <Cookies/>
          <Navbar />
          <Outlet />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
    ],
    
  },
  {
    path: "/order",
    element: <Order />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
