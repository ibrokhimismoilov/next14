import React from "react";
import { notFound } from "next/navigation";

interface IProps {
  params: { productId: string; reviewId: string };
}

const ReviewDetail = ({ params }: IProps) => {
  if (Number(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>
        ProductId: {params.productId}
        <br />
        ReviewDetail: {params.reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
