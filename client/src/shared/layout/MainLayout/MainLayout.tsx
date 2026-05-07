import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
} from '@mui/material';
import { mainLayoutStyles } from './MainLayout.style';
import logo from '../../../assets/MisparlyLogo.png'

export const MainLayout = () => {
  return (
    <Box sx={mainLayoutStyles.root}>
      <AppBar position="static" sx={mainLayoutStyles.appBar}>
        <Toolbar sx={mainLayoutStyles.toolbar}>
          {/* <Typography variant="h5" sx={mainLayoutStyles.logo}>
            Misparly
          </Typography> */}
          {/* TODO: crop logo and make it svg to fit better ALSO: make IL white in the background */}
          <Box
            component="img"
            src={logo}
            alt="Misparly"
            sx={mainLayoutStyles.logo}
        />
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="lg" sx={mainLayoutStyles.main}>
        <Outlet />
      </Container>
    </Box>
  );
};