import ThemeContext from "../contexts/ThemeContext";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import Section from "./Section";

function App() {
  const theme = 'dark';

  return (
      <div>
        <h1>Context API</h1>
        <Counter>
          {(count, increment)=>(
            <ClickCounter count={count} increment={increment} />
          )}
        </Counter>

        <ThemeContext.Provider value={{theme:theme}}>
          <Section />
        </ThemeContext.Provider>
      </div>
  );
}

export default App;
