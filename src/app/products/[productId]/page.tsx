import React from "react";
import { MetaData } from "react";

interface IProps {
  params: { productId: string };
}

export const generateMetaData = async ({
  params,
}: IProps): Promise<MetaData> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`IPhone ${params.productId}`);
    }, 1000);
  });

  return { title: `Product ${title}` };
};

const ProductDetail = ({ params }: IProps) => {
  return (
    <div>
      <h1>Product ID: {params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
