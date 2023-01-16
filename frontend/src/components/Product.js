import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

//destructuring product from props.product
const Product = ({ product }) => {
  return (
    <Card className="py-3 p-3 rounded">
      <Link to={`/product/${product._id}`} />
      <Card.Img src={product.image} variant="top" />
      <Card.Body>
        {" "}
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          {/* <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div> */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          {/* rating here how much rating the customer gave and numReview is what review the customer gave */}
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
