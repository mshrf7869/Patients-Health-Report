import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar'
import Dashboard from './components/Dashboard';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 



  useEffect(() => {
    const username = import.meta.env.VITE_USERNAME;
    const password = import.meta.env.VITE_PASSWORD;
    console.log("Username:", username);
    console.log("Password:", password);
    if (!username || !password) {
      setError("Environment variables not set. Check your .env file.");
      setLoading(false);
      return;
    }
    // Encode the username and password into a base64 string
    const encodedCredentials = btoa(`${username}:${password}`);
    const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

    fetch(url, {
      headers: {
        // Basic Authentication: "Basic <base64 encoded credentials>"
        "Authorization": `Basic ${encodedCredentials}`,
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText} (${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  console.log("dataa",data)
  return (
    <div className='bg-[#F6F7F8] p-2'>
      <NavBar />
      
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      
      {!loading && !error && data && <Dashboard data={data} />}
    </div>
  )
}

export default App
