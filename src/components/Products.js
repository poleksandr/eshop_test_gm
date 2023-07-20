import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Grid from '@mui/material/Grid'

const Products = ({cartItems, handleAddProduct}) => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]) 

    useEffect(() => {

        setLoading(true)

        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products?limit=12"
        }).then(res => {
            setProducts(res.data)
        }).catch(e => console.log(e))
        .finally(() => setLoading(false))
    }, [])

  return (
    <Grid container spacing={3} alignItems="stretch">
        {loading && (
            <div>
                <h1>Loading</h1>
            </div>
        )}

        {products.map(product => (
            <Grid item xs={4} style={{display: 'flex'}} key={product.id}>
                <ProductCard product={product} handleAddProduct={handleAddProduct}/>
            </Grid>
        ))}
    </Grid>
  )
}

export default Products