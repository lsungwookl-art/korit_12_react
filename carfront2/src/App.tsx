import React from 'react';
import CarInput from './components/CarInput';
import { CssBaseline, Container, Box, Typography } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <CssBaseline /> 
      
      <Box sx={{ 
        bgcolor: '#f0f2f5', 
        minHeight: '100vh', 
        py: 5 
      }}>
        <Container maxWidth="sm">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: '#1976d2', mb: 4 }}
          >
            Car Front-End Project
          </Typography>

          <CarInput />

          <Typography 
            variant="body2" 
            align="center" 
            color="text.secondary" 
            sx={{ mt: 4 }}
          >
            © 2026 Senior Mentor Dev. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default App;