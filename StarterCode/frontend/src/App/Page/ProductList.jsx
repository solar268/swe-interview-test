import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  //implement the get products function
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    }
    catch (error) {
      console.error('Error fetching the product:', error);
    }
  };

  //implement the delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting the product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container style={{ paddingTop: '20px', paddingBottom: '30px' }}>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                position: 'relative',
                boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageUrl}
                  alt={product.name}
                />
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(product.id)}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    '&:hover': {
                      color: 'red',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;