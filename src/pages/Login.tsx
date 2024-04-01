import React, { useEffect, useState } from 'react';
import { Box, Container, Paper, TextField, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppBar from '../components/AppBar';
import RedButton from '../components/RedButton';
import { useNavigate } from 'react-router-dom';

type LoginProps = {
  setAuth: any
} 

const Login = ({ setAuth }: LoginProps) => {

  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setAuth(true)
    navigate('/')
    console.log(email, password)
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('auth') ?? 'false')) navigate('/')
  }, [navigate])
  

  return <>
    <AppBar pageTitle={t('appBar.login')} />
    <Container>
      <Box component="form" onSubmit={handleSubmit} mt={4}  sx={{ display: 'flex', marginX: 'auto', maxWidth: '400px', justifyContent: 'center', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '12px', width: '100%' }}>
          <Typography variant="h6">Login to OMS</Typography>
          <TextField label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <RedButton
            text={t('appBar.login')}
            action={handleSubmit}
            style={{ width: '100%', height: '56px', backgroundColor: theme.palette.customColor.main }}
          />
        </Paper>
      </Box>
    </Container>
  </>
};

export default Login;