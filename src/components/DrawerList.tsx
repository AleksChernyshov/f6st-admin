
import Typography from '@mui/material/Typography';
import { Box, Divider,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { InboxOutlined, MailOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import RedButton from './RedButton';

type DrawerListProps = { 
  toggleDrawer: (newOpen: boolean) => void,
  setAuth?: any
}

const links = [
  { title: 'Home Page', url: '/'},
  { title: 'Login Page', url: '/login' },
  { title: 'Orders', url: '/orders'}
]

const DrawerList = ({toggleDrawer, setAuth}: DrawerListProps) => {
  
  const navigate = useNavigate()
  const theme = useTheme()

  const handleLogout = () => {
    setAuth(false)
    navigate('/')
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: 250, height: '100vh' }} p={2} role="presentation" onClick={() => toggleDrawer(false)}>
      {/* <Typography>{`Pizzas (${pizzas.length})`}</Typography>
      <List>
        {pizzas.map((pizza, index) => (
          <ListItem 
            key={pizza.id} 
            sx={{'&:hover': { backgroundColor: theme.palette.customColor.main }}} 
            disablePadding 
            onClick={() => navigate(`/product/${pizza.id}`, {state: {category: pizza.category}})}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={pizza.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography>{`Kebabs (${kebabs.length})`}</Typography>
        {kebabs.map((kebab, index) => (
          <ListItem 
            key={kebab.id} 
            sx={{'&:hover': { backgroundColor: theme.palette.customColor.main }}} 
            disablePadding 
            onClick={() => navigate(`/product/${kebab.id}`, {state: {category: kebab.category}})}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={kebab.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <List>
        <Typography>Links</Typography>
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
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {
        JSON.parse(localStorage.getItem('auth') ?? 'false') &&
        <RedButton
          text={'Logout'}
          action={handleLogout}
          style={{ width: '100%', height: '56px', backgroundColor: theme.palette.customColor.main, marginTop: 'auto' }}
        />
      }
    </Box>
  )
}

export default DrawerList