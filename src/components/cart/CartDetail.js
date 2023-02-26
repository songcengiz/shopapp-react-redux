import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/action/cartActions";
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  IconButton,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { pink } from "@mui/material/colors";
import { Link } from "react-router-dom";

function CartDetail({ cart, removeFromCart }) {
  const handleRemoveCart = (product) => {
    removeFromCart(product);
  };
  return (
    <Box>
      <h3>Cart</h3>

      <Paper elevation={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Paper Type</TableCell>
                <TableCell align="left">Unit Price</TableCell>
                <TableCell align="left">Units In Stock</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((cartItem) => (
                <TableRow
                  key={cartItem.product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{cartItem.product.id}</TableCell>
                  <TableCell component="th" scope="row">
                    <Link to={`/productdetail/${cartItem.product.id}`}>
                      {" "}
                      {cartItem.product.productName}
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    {cartItem.product.paperType}
                  </TableCell>
                  <TableCell align="left">
                    {cartItem.product.unitPrice}
                  </TableCell>
                  <TableCell align="left">
                    {cartItem.product.unitsInStock}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleRemoveCart(cartItem.product)}
                    >
                      {" "}
                      <DeleteForeverIcon sx={{ color: pink[500] }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

function mapStateToProps(state) {
  return { cart: state.cartReducer };
}

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
