import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Cart = ({cartItems}) => {

    let totalValue = 0
    cartItems.map((item) => totalValue = totalValue + item.price * item.quantity)
    
  return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>
                <Typography gutterBottom variant="h6">Cart</Typography>
            </TableCell>
            <TableCell>
                <Typography gutterBottom variant="h8">Quantity</Typography>
            </TableCell>
            <TableCell>
                <Typography gutterBottom variant="h8">Price</Typography>
            </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {cartItems.map((item) => (
            <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {item.title}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.quantity}
                </TableCell>
                <TableCell component="th" scope="row">
                {Math.round(item.price * item.quantity * 100) / 100}$
                </TableCell>
            </TableRow>
            ))}
            <TableRow
                key={"total value"}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {cartItems.length === 0
            ? <TableCell component="th" scope="row">
                <Typography>Your cart is empty</Typography>
            </TableCell>
            : <>
                <TableCell component="th" scope="row">
                <Typography>Total price: </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell component="th" scope="row">
                    {Math.round(totalValue * 100) / 100}$
                </TableCell>
            </>
            }
            </TableRow>
            
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Cart