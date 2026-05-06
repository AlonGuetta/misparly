export const homePageStyles = {
    root: {
        minHeight: {
            xs: 'calc(100vh - 160px)',
            md: 'calc(100vh - 200px)',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        maxWidth: 720,
        textAlign: 'center',
    },
    title: {
        fontWeight: 800,
        letterSpacing: '-0.05em',
        mb: 1.5,
    },
    subtitle: {
        color: 'text.secondary',
        mb: 5,
    },
};