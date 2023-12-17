import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function ProductDetailLayout({ children }: IProps) {
  return (
    <>
      {children}
      <br />
      <hr />
      <br />
      <h2>Product detail layout</h2>
    </>
  );
}
