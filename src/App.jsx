import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
