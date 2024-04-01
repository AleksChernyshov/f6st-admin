import { Container, Paper, Typography } from "@mui/material"
import AppBar from "../components/AppBar"
import { useEffect, useState } from "react"
import FirstLogin from "../components/FirstLogin"
import { Link } from "react-router-dom"

type HomePageProps = {
  setAuth: any
} 

const HomePage = ({ setAuth }: HomePageProps) => {

  const orders = JSON.parse(localStorage.getItem('orders') ?? '[]')

  const [isFirstLogin, setIsFirstLogin] = useState(JSON.parse(localStorage.getItem('isFirstLogin') ?? 'true'))

  useEffect(() => {
    localStorage.setItem('isFirstLogin', JSON.stringify(isFirstLogin))
  }, [isFirstLogin])

  return <>
    <AppBar pageTitle="Home Page" setAuth={setAuth} />
    <Container>
      {
        isFirstLogin ? <FirstLogin setIsFirstLogin={setIsFirstLogin} /> :
          <>
            <Link to='/orders' style={{ textDecoration: 'none'}}>
              <Paper elevation={3} sx={{padding: '12px', marginY: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography variant="h5">Orders</Typography>
                <Typography variant="body1">
                  {`You have ${orders.length} orders`}
                </Typography>
              </Paper>
            </Link>
          </>
      }
    </Container>
  </>
}

export default HomePage