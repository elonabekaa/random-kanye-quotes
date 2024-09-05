import React, { useState, useEffect } from "react";
import "./Quote.css";
import myImage from "./img.jpg";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = async () => {
    setIsLoading(true);
    const res = await fetch("https://api.kanye.rest");
    const data = await res.json();
    console.log(data);
    setQuote(data.quote);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="quote">
        <img src={myImage} alt="" />
      </div>

      <div className="character" title="Kanye West">
        Kanye West
      </div>
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <blockquote>"{quote}"</blockquote>
      )}

      <button onClick={fetchQuote}>New Quote</button>
    </>
  );
};

export default Quote;
