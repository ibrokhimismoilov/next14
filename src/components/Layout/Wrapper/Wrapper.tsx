import React, { ReactNode } from "react";
import { Header, Footer } from "..";

interface IProps {
  children: ReactNode;
}

export function Wrapper({ children }: IProps) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: 1, padding: 30 }}>{children}</main>
      <Footer />
    </div>
  );
}
