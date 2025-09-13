const ReviewCard = ({review}) => {
    return (
        <div className="review-card border h-full p-2 lg:p-4 bg-white  shadow-md rounded-md text-center">
            <img
              src={review?.reviewerImage}
              alt={review?.reviewerName}
              className="review-img mx-auto mb-3  rounded-full w-16 h-16 lg:w-24 lg:h-24 object-cover"
            />
            <h3 className="review-name lg:text-lg  font-semibold">{review?.reviewerName}</h3>
            <p className="review-opinion text-sm ">{review?.reviewerComments}</p>
            <div className="review-rating text-yellow-500">
              {"★".repeat(review?.ratingPoint) + "☆".repeat(5 - review?.ratingPoint)}
            </div>
            <p className="review-date text-xs text-gray-500">{review?.reviewDate}</p>
          </div>
    );
};

export default ReviewCard;