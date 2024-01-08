"use client";

import React from "react";
import { notFound } from "next/navigation";

interface IProps {
	params: { productId: string; reviewId: string };
}

const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};

const ReviewDetail = ({ params }: IProps) => {
	const random = getRandomInt(2);

	if (random === 1) {
		throw new Error("New error loading");
	}

	if (Number(params.reviewId) > 1000) {
		notFound();
	}

	return (
		<div>
			<h2>Random: {random}</h2>
			<h1>
				ProductId: {params.productId}
				<br />
				ReviewDetail: {params.reviewId}
			</h1>
		</div>
	);
};

export default ReviewDetail;
