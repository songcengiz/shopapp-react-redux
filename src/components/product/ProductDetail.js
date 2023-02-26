import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Fab,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { addToCart } from "../../redux/action/cartActions";
import {
  AddShoppingCartIcon,
  ArrowBackIosNewIcon,
  EditIcon,
} from "@mui/icons-material";
import alertify from "alertifyjs";

function ProductDetail({
  product,
  currentCategory,
  addToCart,
  cart,
  currentAuthor,
  ...props
}) {
  function handleAddCart(product) {
    addToCart({ quantity: 1, product });
    alertify.success(`${product.productName} added to cart`);
  }
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 5 },
      }}
    >
      <Grid container>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={product.productName}
              height="194"
              image={product.imageUrl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
              <Link to={"/product"}>
                <Fab size="small" color="primary" sx={{ mr: 1 }}>
                  <ArrowBackIosNewIcon />
                </Fab>
              </Link>
              <Link to={`/editproduct/${product.id}`}>
                <Fab size="small" color="secondary" aria-label="edit">
                  <EditIcon />
                </Fab>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={8}>
          <CardContent sx={{ maxWidth: 345 }}>
            <Typography gutterBottom variant="h7" component="div">
              Author:
              <Link to={`/authordetail/${product.authorId}`}>
                {product.authorName}
              </Link>
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              Publisher:
              <Link to={`/publisherdetail/${product.publisherId}`}>
                {product.publisherName}
              </Link>
            </Typography>
            <div>
              <span className="badge bg-primary">{product.paperType}</span>
            </div>
            <Typography gutterBottom variant="h6" component="div">
              {product.unitPrice}TL
            </Typography>

            <Button
              onClick={() => handleAddCart(product)}
              variant="contained"
              color="secondary"
              startIcon={<AddShoppingCartIcon />}
            >
              Add
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
}

export function getProductById(products, productId) {
  // eslint-disable-next-line eqeqeq
  const product = products.find((product) => product.id == productId) || null;
  return product;
}
function mapStateToProps(state) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { productId } = useParams();
  const product =
    productId && state.productListReducer
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
    currentCategory: state.changeCategoryReducer,
    currentAuthor: state.changeAuthorReducer,
    cart: state.cartReducer,
  };
}
const mapDispatchToProps = {
  addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
