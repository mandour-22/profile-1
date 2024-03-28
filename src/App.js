import React, { useState } from "react";
import Favicon from "react-favicon";
import Icon from "./image/icon.png";
import Home from "./Pages/Home";

const App = () => {
  const [favIcon, setFavIcon] = useState(Icon);
  return (
    <>
      <Favicon url={favIcon} />
      <Home />
    </>
  );
};

export default App;
