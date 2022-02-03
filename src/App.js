import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
