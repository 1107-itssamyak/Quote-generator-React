import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(() => "");

  async function fetchquote() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const res = await response.json();

    setQuote(() => res.slip.advice);
  }

  useEffect(() => {
    fetchquote();
  }, [quote]);

  return (
    <div className="container">
      <div className="quote">{quote}</div>
      <div className="button-container">
        <button className="btn" onClick={fetchquote}>Click to get quote</button>
      </div>
    </div>
  );
}

export default App;