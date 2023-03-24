import React, { useState, useEffect } from 'react';
import './Quote.css';

function Quotes() {
  const [post, setPost] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://api.api-ninjas.com/v1/quotes?category=happiness',
      {
        headers: {
          'X-Api-Key': '2sCRumpxuExNkeNr5HSShQ==KhOZ0TH12B6g4f8i',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        const quote = `${data[0].quote}  `;
        const author = `by - ${data[0].author}`;
        setAuthors(author);
        setPost(quote);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError('error fetching');
      });
  }, []);

  return (
    <div className="quotes">
      <h2><u>Quote</u></h2>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>{hasError}</p>}
      {!isLoading && !hasError && (
      <div>
        <p>{post}</p>
        <p><b>{authors}</b></p>
      </div>
      )}

    </div>
  );
}

export default Quotes;
