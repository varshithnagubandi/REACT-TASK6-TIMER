import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    }
  }, [time]);

  return (
    <div>
      <h4>Time Left : {time} seconds</h4>
    </div>
  );
}

export default App;
