
"use client";

import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL of your ASP.NET Web API endpoint
    const apiUrl = 'https://localhost:7266/api/data';

    // Make a GET request to the API
    fetch(apiUrl, {mode:'cors'})
      .then(response => {
        // Check if response is successful (status 200-299)
        if (!response.ok) {


          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Set the retrieved data to the state
        setData(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch operation
        setError(error.message);
      });
  }, []); // Empty dependency array ensures the effect runs only once
  async function run() {
    const resp = await fetch(
      `https://sandbox.weavr.io/multi/sends`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'idempotency-ref': 'ktyqqqurrreqtqqsqqaaafhtggaa',
          Authorization: 'Bearer <eyJraWQiOiJnZW5lcmF0b3IiLCJhbGciOiJFUzI1NiJ9.eyJTWVNURU0iOiJmYWxzZSIsInN1YiI6IlJPT1QsMTEyMDc2NzI0ODQ1MjgxMzIyIiwiVE9LRU5fUFJPVklERVIiOiJFTUFJTF9BTkRfUEFTU1dPUkQiLCJSQU5ET00iOiItODI3NTM4MzEyOTQyMTQzMTQ4MSIsIklERU5USVRZX0lEIjoiMTEyMDc2NzI0ODQ1MjgxMzIyIiwiSURFTlRJVFlfVFlQRSI6ImNvbnN1bWVycyIsIlBFUlBFVFVBTCI6ImZhbHNlIiwiVE9LRU5fVFlQRSI6IkFDQ0VTUyIsIlRFTkFOVF9JRCI6IjEyMDkiLCJJTVBFUlNPTkFUT1JfU0VTU0lPTl9JRCI6IjAiLCJQUk9HUkFNTUVfSUQiOiIxMDgyNzE0ODY2NTY0NDY0NzUiLCJTRVNTSU9OX0lEIjoiMTEyMDgwNzk3NTE2NDk2OTM4IiwiREVWSUNFX0lEIjoiIiwiSU1QRVJTT05BVEVEIjoiZmFsc2UiLCJBVVRIX0dST1VQX0lEIjoiIn0.dGBt3XKy3PYSyxu2bAeeEvEUdq00SqSg8DF28O8cKQ7YFZNJLigyvei-OMgSPKK8xrvNdfDB2Bw6Vr1_uTuaOQ>',
          'api-key': 'JRsXx4zY2ikBgKhX7awBCw=='
        },
        body: JSON.stringify({
          profileId: '108747538917556234',
          tag: 'Test',
          source: {
            id: '112077557521186860',
            type: 'managed_accounts'
          },
          destination: {
            id: '111209975813111891',
            type: 'managed_accounts'
          },
          destinationAmount: {
            currency: 'GBP',
            amount: 10
          },
          description: 'Test',
          scheduledTimestamp: '9'
        })
      }
    );
  
    const data = await resp.json();
    console.log(data);
  }
  run();

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
