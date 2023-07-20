import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({product, handleAddProduct}) => {

    return (
        <Card
          raised
          sx={{
            maxWidth: 360,
            margin: "0 auto",
            padding: "0.1em",
          }}
          style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}
        >
          <CardMedia
            component="img"
            height="250"
            sx={{ padding: "1em 0", objectFit: "contain" }}
            image={product.image}
            title={product.title}
          />
          <CardContent style={{flexGrow: 1}}>
            <Typography gutterBottom variant="h8" component="div">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {product.price} $
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description.length > 150 ? product.description.slice(0, 150 - 1) + '…' : product.description} 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleAddProduct(product)}>Add to Cart</Button>
          </CardActions>
        </Card>
      )
}

export default ProductCard