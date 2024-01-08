import { Metadata } from "next";

interface IProps {
	params: { productId: string };
}

export async function generateMetadata({ params: { productId } }: IProps): Promise<Metadata> {
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`IPhone ${productId}`);
		}, 1000);
	});
	return { title: `Product ${title}` };
}

const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};

const ProductDetail = ({ params }: IProps) => {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error("New error loading");
	}

	return (
		<div>
			<h1>Product ID: {params.productId}</h1>
		</div>
	);
};

export default ProductDetail;
