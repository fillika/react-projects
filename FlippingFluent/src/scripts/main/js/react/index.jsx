import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const title = 'React with Webpack and babel';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {title}
      <p>Вы кликнули {count} раз</p>
      <p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('js-main-react'));
