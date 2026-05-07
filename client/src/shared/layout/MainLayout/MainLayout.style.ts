export const mainLayoutStyles = {
    root: {
        minHeight: '100vh',
        bgcolor: 'background.default',
    },
    appBar: {
        bgcolor: 'primary.main',
        color: 'text.primary',
        boxShadow: '0 1px 12px rgba(15, 23, 42, 0.08)',
    },
    logo: {
        // height: 'clamp(48px, 6vh, 255px)', 
        width: 'auto',
        maxWidth: 180,
        objectFit: 'contain',
        display: 'block',
        letterSpacing: '-0.04em',
        mt: '-12%',
        mb: '-12%',
    },
    toolbar: {
        minHeight: 'clamp(72px, 8vh, 122px)',
    },
    main: {
        py: {
            xs: 4,
            md: 8,
        },
    },
};