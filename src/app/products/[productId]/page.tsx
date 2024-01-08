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

const ProductDetail = ({ params }: IProps) => {
	return (
		<div>
			<h1>Product ID: {params.productId}</h1>
		</div>
	);
};

export default ProductDetail;
