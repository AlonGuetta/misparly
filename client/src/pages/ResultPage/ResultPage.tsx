import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { resultPageStyles } from './ResultPage.style';

export const ResultPage = () => {
  const { vehicleNumber } = useParams();

  return (
    <Box>
      <Box sx={resultPageStyles.header}>
        <Typography variant="h3" sx={resultPageStyles.title}>
          Vehicle result
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Plate number: {vehicleNumber}
        </Typography>
      </Box>

      <Card sx={resultPageStyles.card}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Vehicle data will appear here
          </Typography>

          <Typography sx={resultPageStyles.placeholder}>
            Later, this page will call your server endpoint and display the mapped vehicle data.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};