import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "../Context/Context";
import Products from "../Products";
import Contact from "../Contact";
import ProductDetails from "../ProductDetails";

const AppRoutes = () => {
  return(
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="contato" element={<Contact />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default AppRoutes;