import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";

export const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
