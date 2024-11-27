import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [greeting, setGreeting] = useState("Greeting Message");

  const handleUpdate = () => {
    setGreeting(message);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={(event) => setMessage(event.target.value)} />
      </div>

      <div className="buttons">
        <button type="submit" onClick={handleUpdate}>Update text</button>
      </div>
    </div>
  );
}

export default App;
