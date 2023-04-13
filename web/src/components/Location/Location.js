import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import "./Location.css";
import AddReview from "../AddReview/AddReview";

// maybe change img to carousel of images
const Location = ({ location, addingReview, setAddingReview }) => {
	const { name, address, images, description, rating, amenities, reviews } =
		location;

	const isLoggedIn = true;

	// get first two reviews and keep count of reviews being displayed (to load more reviews)
	const [reviewCount, setReviewCount] = useState(reviews.length);
	const [reviewsToDisplay, setReviewsToDisplay] = useState(reviews.slice(0, 2));
	let currentReviewDisplayedCount = 2;

	const handleLoadReviews = () => {
		setReviewsToDisplay(reviews.slice(0, currentReviewDisplayedCount + 2));
		if (currentReviewDisplayedCount + 2 > reviews.length)
			currentReviewDisplayedCount = reviews.length;
		else currentReviewDisplayedCount += 2;
	};

	return (
		<div className="highlight">
			<section className="highlight__header">
				<h2 className="highlight-name">{name}</h2>
				<p className="highlight-address">{address}</p>
			</section>
			<HorizontalRule />
			<section className="highlight__images">
				{/*add a carousel or something*/}
				<div className="img-caroussel">
					<img
						className="highlight-img"
						src={images[0]}
						alt={`IMG 1`}
					/>
				</div>
			</section>
			<HorizontalRule />
			<section className="highlight__details">
				<div className="highlight__details-text">
					<p className="highlight-description">{description}</p>
					<Rating
						allowFraction
						initialValue={rating}
						fillColor="#C89BFF"
						readonly
					/>
					<p className="highlight-amenities">Popular amenities:</p>
					<ul className="highlight-amenities-list">
						{amenities.map((amenity) => (
							<li key={amenity}>
								<span>
									{amenity.charAt(0).toUpperCase() + amenity.slice(1)}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className="highlight__details-icons">icons</div>
			</section>
			<HorizontalRule />
			<section className="highlight__reviews">
				{isLoggedIn && (
					<div className="highlight-add-review">
						<span>Been to this location? </span>
						<button onClick={() => setAddingReview(!addingReview)}>
							Add a review!
						</button>
					</div>
				)}
				{addingReview ? (
					<AddReview
						setReviewsToDisplay={setReviewsToDisplay}
						reviewCount={reviewCount}
						setReviewCount={setReviewCount}
						setAddingReview={setAddingReview}
					/>
				) : null}
				{reviewsToDisplay.map((review) => (
					<div
						key={review.id}
						className="highlight-review"
					>
						<p>{review.user}</p>
						<Rating
							allowFraction
							initialValue={review.rating}
							fillColor="#C89BFF"
							readonly
						/>
						<p>{review.comment}</p>
					</div>
				))}
				{currentReviewDisplayedCount <= reviews.length ? (
					<button
						className="highlight-review-button"
						onClick={handleLoadReviews}
					>
						Click to see more reviews
					</button>
				) : null}
			</section>
		</div>
	);
};

export default Location;
