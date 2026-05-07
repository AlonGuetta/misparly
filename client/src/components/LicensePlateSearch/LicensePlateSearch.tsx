import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
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
    <>
    {/* <Paper elevation={0} sx={licensePlateSearchStyles.plate}> */}
      <Box
            sx={{
                display: 'flex',
                alignItems: 'stretch',
                width: 'min(100%, 520px)',
                height: 'clamp(72px, 10vw, 96px)',
                backgroundColor: '#FACC15',
                border: '3px solid #111827',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 10px 24px rgba(15, 23, 42, 0.18)',
            }}
        >
            <Box
                sx={{
                    width: '14%',
                    minWidth: 56,
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                }}
            >
                <Typography sx={{ fontSize: '1.1rem', lineHeight: 1 }}>
                    ✡
                </Typography>

                <Typography sx={{ fontSize: '0.85rem', fontWeight: 700 }}>
                    IL
                </Typography>
            </Box>

            <TextField
            value={vehicleNumber}
        onChange={(event) => setVehicleNumber(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
        
                variant="standard"
                placeholder="12-345-67"
                fullWidth
                // InputProps={{
                //     disableUnderline: true,
                // }}
                // inputProps={{
                //     maxLength: 9,
                //     inputMode: 'numeric',
                // }}
                sx={{
                    '& .MuiInputBase-root': {
                        height: '100%',
                    },
                    '& .MuiInputBase-input': {
                        height: '100%',
                        px: 3,
                        textAlign: 'center',
                        fontSize: 'clamp(2rem, 7vw, 4rem)',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        color: '#111827',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#111827',
                        opacity: 0.35,
                    },
                }}
            />
        </Box>

    <Button
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        onClick={handleSearch}
        sx={licensePlateSearchStyles.button}
      >
        חפש רכב
      </Button>
      </>
  );
};