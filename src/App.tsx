import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import OrdersPage from './pages/OrdersPage';
import Loader from './components/Loader';
import ProductPage from './pages/ProductPage';
import PaymentPage from './pages/PaymentPage';
import QrCodePage from './pages/QrCodePage';
import UsersPage from './pages/UsersPage';
import ProfilesPage from './pages/ProfilesPage';

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
      <Route path="/products" element={auth ? <ProductPage setAuth={setAuth} /> : <Loader />} />
      <Route path="/payments" element={auth ? <PaymentPage setAuth={setAuth} /> : <Loader />} />
      <Route path="/qr-codes" element={auth ? <QrCodePage setAuth={setAuth} /> : <Loader />} />
      <Route path="/users" element={auth ? <UsersPage setAuth={setAuth} /> : <Loader />} />
      <Route path="/profiles" element={auth ? <ProfilesPage setAuth={setAuth} /> : <Loader />} />
    </Routes>
  )
}

export default App;
