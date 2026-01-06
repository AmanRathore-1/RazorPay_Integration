import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PaymentSuccess from "./components/PaymentSuccess";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
