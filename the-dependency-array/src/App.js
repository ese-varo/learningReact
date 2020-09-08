import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  // useEffect(() => {
  //   console.log(`typing "${val}"`);
  // }, [val]);

  // useEffect(() => {
  //   console.log(`saved phrase "${phrase}"`);
  // }, [phrase]);

  useEffect(() => {
    console.log("Only after initial render");
  }, []);

  useEffect(() => {
    console.log(`either val or phrase were changed
      val: "${val}"
      phrase: "${phrase}"`);
  }, [phrase, val]);

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}

export default App;
