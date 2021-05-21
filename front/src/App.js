import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
const apiUrl = 'http://localhost:8000';
axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
function App() {
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  const [fetchError, setFetchError] = useState(null);
  const [whoAmI, setWhoAmI] = useState(null)

const signIn = async () => {
  try {
    const body = {
      'user': '1234@1234.com',
      'password': 1234
    }
    const { data } = await axios.post(`${apiUrl}/api/login`, body)
    if (!data.token) {
      setFetchError(data)
    }
    localStorage.setItem('token', data.token)
    setJwt(data.token)
  } catch (err) {
    console.log('error:', err)
    setFetchError(err)

  }
}
const findMe = async () => {
  try {
    const { data } = await axios.post(`${apiUrl}/api/whoAmI`, jwt)
    console.log(data)
    setWhoAmI(data.user)
  } catch (err) {
    console.log(err)
    // setFetchError(err)

  }
}
return (
    <>
      <section style={{ marginBottom: '10px' }}>

        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>
      <section>

        <button onClick={() => signIn()}>
          Sign In 
          </button>
        {fetchError && (
          <p style={{ color: 'red' }}>{fetchError}</p>
        )}
      </section>
      <section>
        <button onClick={() => findMe()}>Who Am I</button>
        {whoAmI && (
          <h4>You are: {whoAmI}</h4>
        )}
      </section>
    </>
  );
}
export default App;