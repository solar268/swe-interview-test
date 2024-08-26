import React from 'react';
import ProductList from './App/Page/ProductList';
import { CssBaseline, Typography, Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '40px', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
          Simple Card list
        </Typography>
        <ProductList />
      </Container>
    </div>
  );
};

export default App;
