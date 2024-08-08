import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../Router/api";
import "../comp_css/SingleProduct.css";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ comment: "", rating: 0 });
  const [showReviews, setShowReviews] = useState(false);
  const userid = localStorage.getItem("userid");

  useEffect(() => {
    api
      .get(`/ecom/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the API: ", error);
      });
  }, [productId]);

  const addProductToCart = (productid) => {
    api
      .post(`/ecom/cart/add-product?userId=${userid}&productId=${productid}`)
      .then((response) => {
        localStorage.setItem("cartid", response.data.cartId);
        alert("Product added to Cart.");
      })
      .catch((error) => {
        alert("Product already in cart.");
      });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewData = { ...newReview, productId: productId, userId: userid };
    api
      .post(`/ecom/product-reviews/${productId}/${userid}`, reviewData)
      .then((response) => {
        setReviews([...reviews, response.data]);
        setNewReview({ comment: "", rating: 0 });
      })
      .catch((error) => {
        console.error("Error adding review: ", error);
      });
  };

  const fetchReviews = () => {
    api
      .get(`/ecom/product-reviews/${productId}`)
      .then((response) => {
        setReviews(response.data);
        setShowReviews(true);
      })
      .catch((error) => {
        console.error("Error fetching reviews: ", error);
      });
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <>
      <h1 style={{ color: "green", textAlign: "center", margin: "20px" }}>
        Single Product
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div className="product-container" style={{ flex: 1 }}>
          <div className="product-details">
            <div className="product_image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product_details">
              <h2>{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Description: {product.description}</p>
              <p>Price: $ {product.price}</p>
              <div>
                <button onClick={() => addProductToCart(product.productId)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ margin: "0 20px", display: "flex", alignItems: "center" }}
        >
          <button
            onClick={() => navigate("/user/cart")}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Move To Cart
          </button>
        </div>
        <div className="review-section" style={{ flex: 1 }}>
          <h3>Reviews</h3>
          <form onSubmit={handleReviewSubmit}>
            <input
              type="text"
              placeholder="Add a review"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Rating (0-5)"
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: e.target.value })
              }
              max="5"
              min="0"
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={showReviews ? toggleReviews : fetchReviews}>
            {showReviews ? "Hide Reviews" : "Show Reviews"}
          </button>
          {showReviews && (
            <div>
              <h4 style={{ marginTop: "2vw" }}>Reviews</h4>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.reviewId} className="review">
                    <p>________________________</p>
                    <p>{review.comment}</p>
                    <p>Rating: {review.rating}</p>
                    <p>________________________</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;