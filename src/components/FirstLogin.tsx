import { Box, Typography, useTheme } from '@mui/material'
import RedButton from './RedButton';

type FirstLoginProps = {
  setIsFirstLogin: any
}

export default function FirstLogin({setIsFirstLogin}: FirstLoginProps) {
  const theme = useTheme();
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap={4} mt={4}>
        <Typography variant="h5">Welcome</Typography>
        <Typography variant="body1" textAlign='center'>
          Easys Direct paymment of your choice of payment provider
          globally available in 67 countries (see the list here)
          and easy and ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat......
          payment goes directly to you... no fix cost, only 3% on top
          of the payment. Minmizie .....you can add the applicaiton
          to the home screen
        </Typography>
        <RedButton
            text={'Next'}
            action={() => setIsFirstLogin(false)}
            style={{ width: '100%', height: '56px', backgroundColor: theme.palette.customColor.main }}
          />
      </Box>
  )
}
