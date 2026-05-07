export const licensePlateSearchStyles = {
    plate: {
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        p: {
            xs: 2,
            md: 2.5,
        },
        borderRadius: 4,
        border: '3px solid',
        borderColor: 'secondary.main',
        bgcolor: '#FFE066',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.14)',
    },
    input: {
        flex: 1,
        '& .MuiOutlinedInput-root': {
            bgcolor: 'background.paper',
            fontSize: {
                xs: 24,
                md: 36,
            },
            fontWeight: 800,
            letterSpacing: '0.12em',
        },
        '& input': {
            textAlign: 'center',
        },
    },
    button: {
        height: {
            xs: 56,
            md: 72,
        },
        width: {
            xs: 156,
            md: 212,
        },
        px: {
            xs: 2,
            md: 4,
        },
        fontWeight: 700,
        marginTop: 2
    },
};