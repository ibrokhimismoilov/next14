import { CSSProperties, ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

const style: CSSProperties = {
	padding: 100,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: "1px solid #ddd",
	boxShadow: "0 4px 8px #0002",
	height: "100%"
};

export const Card = ({ children }: IProps) => {
	return <div style={style}>{children}</div>;
};
