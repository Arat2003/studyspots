import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./AddReview.css";

const AddReview = ({
	setReviewsToDisplay,
	setAddingReview,
	reviewCount,
	setReviewCount,
}) => {
	const [rating, setRating] = useState(0);
	const [reviewComment, setReviewComment] = useState("");

	const handleRatingClick = (value) => {
		setRating(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newReview = {
			user: `Arat2003`,
			id: Math.random() * 999999,
			rating,
			comment: reviewComment,
		};
		setReviewsToDisplay((r) => [newReview, ...r]);
		setReviewCount(() => reviewCount + 1);
		setAddingReview(false);
	};

	return (
		<form
			className="highlight__add-review"
			onSubmit={handleSubmit}
		>
			<div className="add-review-rating">
				<Rating
					allowFraction
					onClick={(value) => handleRatingClick(value)}
					fillColor="#C89BFF"
				/>
			</div>

			<textarea
				id="add-review-textarea"
				className="add-review-textarea"
				required
				value={reviewComment}
				onChange={(e) => setReviewComment(e.target.value)}
			/>
			<button
				className="add-review-button"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

export default AddReview;
