import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";
import { Basket } from "../types/Basket";
import { useNavigate } from "react-router";
import { Order } from "../types/Order";
import { useTranslation } from "react-i18next";
import AppBar from "../components/AppBar";
import RedButton from "../components/RedButton";
import OrderCard from "../components/OrderCard";

type OrdersPageProps = {
  setAuth: any
}

const OrdersPage = ({ setAuth }: OrdersPageProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  const orders = JSON.parse(localStorage.getItem('orders') ?? '[]')

  return <>
    <AppBar pageTitle={t('appBar.orders')} setAuth={setAuth} />
    <Container style={{marginBottom: '120px'}}>

      {
        orders.map((order: Order) => {
          return <Paper elevation={3} sx={{padding: '12px', marginY: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Box mt={2} display='flex' flexDirection='column' gap={2}>
              <Typography variant="h5" component="div">
                { `${t('orderPage.order')}: ${order.orderId}` }
              </Typography>
              <Grid
                container
                spacing={2}
                columns={12}
              >
                {
                  order.orderedProducts.map((product: Basket) => <OrderCard key={product.position} product={product} />)
                }
              </Grid> 
            </Box>
            
            <RedButton
              text={'Ready'}
              action={() => navigate('/')}
              style={{ width: '100%', height: '56px', alignSelf: 'center', backgroundColor: theme.palette.customColor.main }}
            />
          </Paper>
        })
      }

      
    </Container>
  </>
}

export default OrdersPage;