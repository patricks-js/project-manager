import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./storage/routes";
import GlobalStyle from "./styles/global";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
