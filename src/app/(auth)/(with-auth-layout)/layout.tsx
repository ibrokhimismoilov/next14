import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IProps) {
  return (
    <>
      <h2>Auth layout</h2>
      <br />
      <hr />
      <br />

      {children}
    </>
  );
}
