// import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './styles/theme';
// import HomePage from './pages/HomePage';

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <HomePage />
//     </ThemeProvider>
//   );
// }

// export default App;

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import theme from './styles/theme';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Global Reset for Material-UI */}
      <CssBaseline />

      {/* Main App Container */}
      <Box
        sx={{
          minHeight: '100vh', // Full viewport height
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Centered Layout */}
        <Container
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: 4, // Padding for vertical space
          }}
        >
          <HomePage />
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 2,
            textAlign: 'center',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          }}
        >
          © 2025 My React App
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
