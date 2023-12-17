import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog"
};

interface IProps {
	children: ReactNode;
}

export default function BlogLayout({ children }: IProps) {
	return <>{children}</>;
}
