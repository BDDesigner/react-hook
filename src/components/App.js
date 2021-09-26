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

        <Section theme={theme}/>
      </div>
  );
}

export default App;
