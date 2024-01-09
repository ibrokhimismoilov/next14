import { Card } from "@/components";
import Link from "next/link";

export default function ArchivedNotifications() {
	return (
		<Card>
			<h1>Archived Notifications</h1>
			<Link href={"/complex-dashboard"}>Default</Link>
		</Card>
	);
}
