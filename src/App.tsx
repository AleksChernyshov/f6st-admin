import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import OrdersPage from './pages/OrdersPage';
import Loader from './components/Loader';

function App() {

  const navigate = useNavigate()

  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth') ?? 'false'))

  useEffect(() => {
    
    localStorage.setItem('auth', JSON.stringify(auth))
    
    if (!auth) navigate('/login')

  }, [auth, navigate])

  return (
    <Routes>
      <Route path="/" element={auth ? <HomePage setAuth={setAuth} /> : <Loader />} />
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route path="/orders" element={auth ? <OrdersPage setAuth={setAuth} /> : <Loader />} />
    </Routes>
  )
}

export default App;
