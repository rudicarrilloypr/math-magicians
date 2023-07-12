import React, { useEffect, useState } from 'react';
import './Quote.css';

function Quote() {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: {
        'X-Api-Key': 'oF/Wh13s4YEHx1jaPyWlmw==eYn2l3wmuDgNIs36',
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        setQuoteData(data[0]); // We only need the first quote
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error fetching data: ', error);
        setError(error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <div className="quote-container">
      <p className="quote-text">{quoteData.quote}</p>
      <p className="quote-author">{quoteData.author}</p>
    </div>
  );
}

export default Quote;
