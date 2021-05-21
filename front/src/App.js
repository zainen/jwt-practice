import React, { useState, useEffect } from 'react';
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

// const signIn = async () => {
//   try {
//     const body = {
//       'user': '1234@1234.com',
//       'password': 1234
//     }
//     const { data } = await axios.post(`${apiUrl}/api/login`, body)
//     if (!data.token) {
//       setFetchError(data)
//     }
//     localStorage.setItem('token', data.token)
//     setJwt(data.token)
//   } catch (err) {
//     console.log('error:', err)
//     setFetchError(err)

//   }
// }
const [products, setProducts] = useState(null)
useEffect(() => {
    axios.get(`${apiUrl}/api/products`).then(res => {
      setProducts(res.data)
      console.log(products)
    })
  }, [])
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const handleChange = (e, type) => {
  console.log(e.target.value)
  type(e.target.value)
}
const login = async (e) => {
  const info = {username, password}
  console.log(info)
  try {
    e.preventDefault()
    const { data } = await axios.post(`${apiUrl}/api/login`, info)
    if(!data.token) {
      setFetchError(data)
    }
    localStorage.setItem('token', data.token)
    setJwt(data.token)
    console.log(data)
  } catch (err) {
    console.log(err)
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
    <section>
      <form action='POST' >
        <label >Username: </label>
        <input type='Text' id='username' onChange={(e) => handleChange(e, setUsername)}/>
        <label >Password: </label>
        <input type='Password' id='password' onChange={(e) => handleChange(e, setPassword)}/>
        <button type='Submit' onClick={(e) => login(e)}>Login</button>
      </form>
    </section>
      {/* <section style={{ marginBottom: '10px' }}>

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
      </section> */}
    </>
  );
}
export default App;