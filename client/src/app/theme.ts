import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0F172A',
        },
        secondary: {
            main: '#2563EB',
        },
        background: {
            default: '#F8FAFC',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#0F172A',
            secondary: '#64748B',
        },
        divider: '#E2E8F0',
        warning: {
            main: '#FACC15',
        },
    },
    shape: {
        borderRadius: 14,
    },
    typography: {
        fontFamily: [
            'Inter',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});