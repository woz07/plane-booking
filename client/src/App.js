import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>React and Node.js Project</h1>
      <p>{!data ? 'Loading...' : data}</p>
    </div>
  );
}

export default App;
