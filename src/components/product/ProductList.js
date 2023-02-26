import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Button,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { getProducts } from "../../redux/action/productActions";
import { addToCart } from "../../redux/action/cartActions";
import { getAuthors } from "../../redux/action/authorActions";
import { getPublishers } from "../../redux/action/publisherActions";
import { productPagination } from "../../redux/action/productActions";
import PaginationComponent from "../common/Pagination";

function ProductList({
  products,
  authors,
  publishers,
  getProducts,
  getAuthors,
  getPublishers,
  currentCategory,
  currentAuthor,
  addToCart,
  productPagination,
  ...props
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!props.products || !props.authors || !props.publishers) {
      productPagination(page);
      getAuthors();
      getPublishers();
    }
  }, [
    getAuthors,
    getPublishers,
    page,
    productPagination,
    props.authors,
    props.products,
    props.publishers,
  ]);

  function handleAddCart(product) {
    addToCart({ quantity: 1, product });
  }
  function handleChange(e) {
    setPage(e.target.textContent);
  }

  return (
    <Paper
      elevation={3}
      style={{
        margin: "1rem 0",
        padding: "0 1rem",
        lineHeight: "60px",
        textAlign: "center",
      }}
    >
      <Box>
        <PaginationComponent onChange={handleChange} count={8} />

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Paper Type</TableCell>
                <TableCell align="left">Unit Price</TableCell>
                <TableCell align="left">Units In Stock</TableCell>
                <TableCell align="left">Author Name</TableCell>
                <TableCell align="left">Publisher Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{product.id}</TableCell>
                  <TableCell component="th" scope="row">
                    <Link to={`/productdetail/${product.id}`}>
                      {product.productName}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{product.paperType}</TableCell>
                  <TableCell align="left">{product.unitPrice}</TableCell>
                  <TableCell align="left">{product.unitsInStock}</TableCell>
                  <TableCell align="left">{product.authorName}</TableCell>
                  <TableCell align="left">{product.publisherName}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleAddCart(product)}
                      variant="outlined"
                      size="small"
                      color="secondary"
                      startIcon={<AddShoppingCartIcon />}
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
    publishers: state.publisherListReducer,
    authors: state.authorListReducer,
    currentAuthor: state.changeAuthorReducer,
  };
}

const mapDispatchToProps = {
  getProducts,
  addToCart,
  getAuthors,
  getPublishers,
  productPagination,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
