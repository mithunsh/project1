import { useState } from 'react';

function App() {
  const [data, setData] = useState("");

  const callBackend = async () => {
    try {
      const res = await fetch('http://backend:3000/data'); // IMPORTANT
      const json = await res.json();
      setData(json[0].time);
    } catch (err) {
      setData("Error connecting backend ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend Working 🚀</h1>
      <button onClick={callBackend}>Get Time from DB</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
