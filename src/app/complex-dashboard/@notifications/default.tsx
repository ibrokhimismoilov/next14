import { Card } from "@/components";
import Link from "next/link";

export default function DefaultNotifications() {
	return (
		<Card>
			<h1>Default Notifications</h1>
			<Link href={"/complex-dashboard/archived"}>Archived</Link>
		</Card>
	);
}
