import { Card } from "@/components";
import Link from "next/link";

export default function DefaultArchivedNotifications() {
	return (
		<Card>
			<h1>Archived default page</h1>
			<Link href={"/complex-dashboard"}>Default</Link>
		</Card>
	);
}
