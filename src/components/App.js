import React from 'react';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';


function App() {
  return (
    <>
      <Counter>
        {(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
      </Counter>
      <Counter>
        {(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />}
      </Counter>
    </>
  );
}

export default App;
