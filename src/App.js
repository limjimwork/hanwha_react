import React from "react";

import SkipNav from "./components/skipNav";
import Header from "./components/header";
import Visual from "./components/visual";
import Container from "./components/container";
import Footer from "./components/footer";

import GlobalStyle from "./styled/globalStyled";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SkipNav />
      <Header />
      <Visual />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
