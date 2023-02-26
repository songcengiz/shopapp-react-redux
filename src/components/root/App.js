import React from "react";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../product/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
import ProductDetail from "../product/ProductDetail";
import AuthorList from "../author/AuthorList";
import AuthorDetail from "../author/AuthorDetail";
import HomePage from "../common/HomePage";
import PublisherList from "../publisher/PublisherList";
import PublisherDetail from "../publisher/PublisherDetail";
import AddOrUpdateAuthor from "../author/AddOrUpdateAuthor";
import AddOrUpdatePublisher from "../publisher/AddOrUpdatePublisher";
import AddOrUpdateCategory from "../category/AddOrUpdateCategory";

function App() {
  return (
    <div>  <Navbar />
    <Container>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/product" element={<Dashboard />} />
        <Route path="/author" element={<AuthorList />} />
        <Route path="/publisher" element={<PublisherList />} />
        <Route
          path="/publisherdetail/:publisherId"
          element={<PublisherDetail />}
        />
        <Route path="/authordetail/:authorId" element={<AuthorDetail />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
        <Route path="/editproduct" element={<AddOrUpdateProduct />} />
        <Route
          path="/editproduct/:productId"
          element={<AddOrUpdateProduct />}
        />
        <Route path="/editauthor" element={<AddOrUpdateAuthor />} />
        <Route path="/editauthor/:authorId" element={<AddOrUpdateAuthor />} />
        <Route path="/editpublisher" element={<AddOrUpdatePublisher />} />
        <Route
          path="/editpublisher/:publisherId"
          element={<AddOrUpdatePublisher />}
        />
        <Route path="/editcategory" element={<AddOrUpdateCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
    </div>
  );
}

export default App;
