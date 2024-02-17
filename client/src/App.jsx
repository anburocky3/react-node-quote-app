import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import TheNavbar from "./components/TheNavbar";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      const fetchResult = await fetch("/api");
      const quotesData = await fetchResult.json();

      console.log(quotesData);

      setQuotes(quotesData);
    }
    fetchQuotes();
  }, []);

  return (
    <div className="bg-zinc-800 min-h-screen">
      <TheNavbar />
      <main className="m-10 space-y-4">
        {quotes.length === 0 ? (
          <div className="bg-white p-5 rounded">No quotes data available!</div>
        ) : (
          ""
        )}
        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote.quote} author={quote.author} />
        ))}
      </main>
    </div>
  );
}

export default App;
