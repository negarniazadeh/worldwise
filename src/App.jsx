import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoding] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoding(true);
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) throw new Error("somthing went wrong");

        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(err);
        alert(err.message);
      } finally {
        setIsLoding(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<p>cities</p>} />

          <Route path="cities" element={<p>cities</p>} />
          <Route path="countries" element={<p>countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
