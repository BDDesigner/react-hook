import React from "react";
import ClickCounter from "./ClickCounter";
import Text from "./Text";

const Country = React.createContext('Bangladesh');

function App() {
  return (
    <div>
      <Country.Provider value="a">
        <ClickCounter />
        <Text />
      </Country.Provider>
    </div>
  );
}

export default App;
