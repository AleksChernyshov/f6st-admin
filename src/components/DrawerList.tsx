
import Typography from '@mui/material/Typography';
import { Box, Divider,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { InboxOutlined, MailOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import RedButton from './RedButton';
import { useTranslation } from 'react-i18next';

type DrawerListProps = { 
  toggleDrawer: (newOpen: boolean) => void,
  setAuth?: any
}

const links = [
  { title: 'Login Page', url: '/login' },
  { title: 'Home Page', url: '/'},
  { title: 'Orders', url: '/orders' },
  { title: "Products", url: "/products"},
  { title: "Payment", url: "/payments"},
  { title: "QR Code", url: "/qr-codes"},
  { title: "Users", url: "/users"},
  { title: "Profiles", url: "/profiles"}
]

const DrawerList = ({toggleDrawer, setAuth}: DrawerListProps) => {
  
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  const handleLogout = () => {
    setAuth(false)
    navigate('/')
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: 250, height: '100vh' }} p={2} role="presentation" onClick={() => toggleDrawer(false)}>
      <Divider />
      <List>
        <Typography>{t('appBar.links')}</Typography>
        {links.map((link, index) => (
          <ListItem 
            key={index} 
            sx={{'&:hover': { backgroundColor: theme.palette.customColor.main }}} 
            disablePadding 
            onClick={() => navigate(link.url)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={t(`temporary.${link.title}`)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {
        JSON.parse(localStorage.getItem('auth') ?? 'false') &&
        <RedButton
          text={t('buttons.logout')}
          action={handleLogout}
          style={{ width: '100%', height: '56px', backgroundColor: theme.palette.customColor.main, marginTop: 'auto' }}
        />
      }
    </Box>
  )
}

export default DrawerList