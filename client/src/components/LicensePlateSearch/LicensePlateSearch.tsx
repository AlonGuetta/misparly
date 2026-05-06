import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { licensePlateSearchStyles } from './LicensePlateSearch.style';

export const LicensePlateSearch = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const cleanVehicleNumber = vehicleNumber.replace(/\D/g, '');

    if (!cleanVehicleNumber) {
      return;
    }

    navigate(`/vehicle/${cleanVehicleNumber}`);
  };

  return (
    <Paper elevation={0} sx={licensePlateSearchStyles.plate}>
      <TextField
        value={vehicleNumber}
        onChange={(event) => setVehicleNumber(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
        placeholder="1234567"
        variant="outlined"
        sx={licensePlateSearchStyles.input}
        inputProps={{
          inputMode: 'numeric',
          maxLength: 8,
        }}
      />

      <Button
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        onClick={handleSearch}
        sx={licensePlateSearchStyles.button}
      >
        Search
      </Button>
    </Paper>
  );
};