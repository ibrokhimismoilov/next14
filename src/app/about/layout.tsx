import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: "About page"
	},
	description: "About page description"
};

interface IProps {
	children: ReactNode;
}

export default function AboutLayout({ children }: IProps) {
	return <>{children}</>;
}
