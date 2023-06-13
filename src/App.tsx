import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Our from "./pages/Our/Our";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route path="/test4_idocnet_ts/" element={<Home />}></Route>
            <Route path="/test4_idocnet_ts/our" element={<Our />}></Route>
            <Route
              path="/test4_idocnet_ts/gallery"
              element={<Gallery />}
            ></Route>
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
