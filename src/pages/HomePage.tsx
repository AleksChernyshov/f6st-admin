import { Container, Grid, Paper, Typography } from "@mui/material"
import AppBar from "../components/AppBar"
import { useEffect, useState } from "react"
import FirstLogin from "../components/FirstLogin"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

type HomePageProps = {
  setAuth: any
} 

const otherLinks = [
  {
    title: "Products",
    description: "0 products registered",
    url: "/products"
  },
  {
    title: "Payment",
    description: "0 payments registered",
    url: "/payments"
  },
  {
    title: "QR Code",
    description: "0 QR's registered",
    url: "/qr-codes"
  },
  {
    title: "Users",
    description: "0 users registered",
    url: "/users"
  },
  {
    title: "Profiles",
    description: "0 profiles registered",
    url: "/profiles"
  },
  
]

const HomePage = ({ setAuth }: HomePageProps) => {

  const { t } = useTranslation()


  const orders = JSON.parse(localStorage.getItem('orders') ?? '[]')

  const [isFirstLogin, setIsFirstLogin] = useState(JSON.parse(localStorage.getItem('isFirstLogin') ?? 'true'))

  useEffect(() => {
    localStorage.setItem('isFirstLogin', JSON.stringify(isFirstLogin))
  }, [isFirstLogin])

  return <>
    <AppBar pageTitle={t("appBar.homePage")} setAuth={setAuth} />
    <Container>
      {
        isFirstLogin ? <FirstLogin setIsFirstLogin={setIsFirstLogin} /> :
          <Grid
            container
            spacing={2}
            columns={12}
            mt={2}
          >
            
            <Grid item xs={12} sm={6} md={6} lg={4} >
              <Link to='/orders' style={{ textDecoration: 'none'}}>
                <Paper elevation={3} sx={{padding: '12px', display: 'flex', flexDirection: 'column', gap: 2}}>
                  <Typography variant="h5">{t(`temporary.Orders`)}</Typography>
                  <Typography variant="body1">
                    {`You have ${orders.length} orders`}
                  </Typography>
                </Paper>
              </Link>
            </Grid>

            {
              otherLinks.map((link) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={link.url}>
                  <Link to={link.url} style={{ textDecoration: 'none'}}>
                    <Paper elevation={3} sx={{padding: '12px', display: 'flex', flexDirection: 'column', gap: 2}}>
                      <Typography variant="h5">{t(`temporary.${link.title}`)}</Typography>
                      <Typography variant="body1">
                        {link.description}
                      </Typography>
                    </Paper>
                  </Link>
                </Grid>
              ))
            }
            
          </Grid> 
      }
    </Container>
  </>
}

export default HomePage