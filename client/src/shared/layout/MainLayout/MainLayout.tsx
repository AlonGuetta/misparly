import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { mainLayoutStyles } from './MainLayout.style';

export const MainLayout = () => {
  return (
    <Box sx={mainLayoutStyles.root}>
      <AppBar position="static" sx={mainLayoutStyles.appBar}>
        <Toolbar>
          <Typography variant="h5" sx={mainLayoutStyles.logo}>
            Misparly
          </Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="lg" sx={mainLayoutStyles.main}>
        <Outlet />
      </Container>
    </Box>
  );
};