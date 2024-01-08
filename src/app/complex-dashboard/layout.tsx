import { ReactNode } from "react";

interface IProps {
	notifications: ReactNode;
	revenue: ReactNode;
	users: ReactNode;
	children: ReactNode;
}

export default function ComplexDashboard({ children, users, revenue, notifications }: IProps) {
	return (
		<div>
			<div>{children}</div>

			<br />
			<hr />
			<br />

			<div style={{ display: "flex", gap: 20 }}>
				<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
					<div>{users}</div>
					<div>{revenue}</div>
				</div>
				<div style={{ display: "flex", flex: 1 }}>{notifications}</div>
			</div>
		</div>
	);
}
