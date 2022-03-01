import { Routes as Routing, Route } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NewProject from "../pages/NewProject";

const AppRoutes = () => {
  return (
    <Routing>
      <Route path="/" element={<Home />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routing>
  );
};

export default AppRoutes;
