// src/components/Review.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../Router/api";

const Review = ({ productId, isAdmin }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    // Fetch reviews for the product
    axios
      .get(`/api/reviews/${productId}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, [productId]);

  const handleAddReview = () => {
    const userId = localStorage.getItem("userid");
    api
      .post(`/api/reviews`, { productId, userId, comment: newReview })
      .then((response) => {
        setReviews([...reviews, response.data]);
        setNewReview("");
      })
      .catch((error) => {
        console.error("There was an error adding the review!", error);
      });
  };

  const handleDeleteReview = (reviewId) => {
    api
      .delete(`/api/reviews/${reviewId}`)
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== reviewId));
      })
      .catch((error) => {
        console.error("There was an error deleting the review!", error);
      });
  };

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.comment}</p>
          {isAdmin && (
            <button onClick={() => handleDeleteReview(review.id)}>
              Delete
            </button>
          )}
        </div>
      ))}
      <div>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Add your review"
        ></textarea>
        <button onClick={handleAddReview}>Submit</button>
      </div>
    </div>
  );
};

export default Review;