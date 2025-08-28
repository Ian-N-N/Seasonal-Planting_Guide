import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyGarden from "./pages/MyGarden";
import History from "./pages/History";

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-garden" element={<MyGarden />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;