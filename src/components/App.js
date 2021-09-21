import React from 'react';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';


function App() {
  return (
    <div>
      <Counter render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />} />
      <Counter render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />} />
    </div>
  );
}

export default App;
