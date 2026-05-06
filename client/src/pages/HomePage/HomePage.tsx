import { Box, Typography } from '@mui/material';
import { LicensePlateSearch } from '../../components/LicensePlateSearch/LicensePlateSearch';
import { homePageStyles } from './HomePage.style';

export const HomePage = () => {
  return (
    <Box sx={homePageStyles.root}>
      <Box sx={homePageStyles.content}>
        <Typography variant="h2" sx={homePageStyles.title}>
          Search Israeli vehicles by plate
        </Typography>

        <Typography variant="h6" sx={homePageStyles.subtitle}>
          Enter a license plate number and get clean vehicle information.
        </Typography>

        <LicensePlateSearch />
      </Box>
    </Box>
  );
};