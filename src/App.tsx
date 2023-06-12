import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route path="/test4_idocnet_ts/" element={<Home />}></Route>
            <Route
              path="/test4_idocnet_ts/product"
              element={<Product />}
            ></Route>
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
