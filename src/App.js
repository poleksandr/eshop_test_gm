import { useState } from 'react';
import Products from './components/Products';
import Box from '@mui/material/Box';
import Cart from './components/Cart';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';

function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id)

    if (existingProduct) {
      setCartItems(cartItems.map((item) => item.id === product.id ? {...existingProduct, quantity: existingProduct.quantity + 1}: item))
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  return (
    <Box m={1} pt={2}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Products cartItems={cartItems} handleAddProduct={handleAddProduct}/>
          </Grid>
          <Grid item xs={4}>
            <Cart cartItems={cartItems}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
