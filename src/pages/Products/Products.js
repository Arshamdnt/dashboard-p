import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  IconButton, 
  TextField, 
  Fade,
  Box 
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import { Products } from '../../datas';
import './Products.css';

export default function ProductsList() {
  const [productsData, setProductsData] = useState(Products);
  const [search, setSearch] = useState('');

  const handleDeleteProduct = (productID) => {
    setProductsData(productsData.filter((product) => product.id !== productID));
  };

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="products-container">
      <Typography variant="h4" align="center" gutterBottom>
        لیست محصولات
      </Typography>
      <Box display="flex" justifyContent="center" mb={3}>
        <TextField
          variant="outlined"
          placeholder="جستجوی محصول..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '300px' }}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Fade in timeout={500}>
              <Card className="product-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={product.avatar}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    قیمت: ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`product/${product.id}`} className="link">
                    <IconButton color="primary">
                      <EditOutlinedIcon />
                    </IconButton>
                  </Link>
                  <IconButton 
                    color="error" 
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
