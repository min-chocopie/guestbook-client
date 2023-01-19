import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState();

  useEffect(() => {
    fetch('/api/count/current/')
      .then(res => res.json())
      .then(res => setCount(res.result));
  })

  const onButtonClick = () => {
    fetch('/api/count/')
      .then(res => res.json())
      .then(res => setCount(res.result));
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onButtonClick}>클릭</button>
    </div>
  );
}

export default App;
