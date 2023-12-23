"use client";

import { useRouter } from "next/navigation";

export default function page() {
	const router = useRouter();

	return (
		<div>
			<h1 className="mb-10">OrderProduct</h1>

			<div className="flex gap-5">
				<button className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 border p-2 rounded-xl" onClick={() => router.push("/")}>
					Navigate to Home
				</button>
				<button className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 border p-2 rounded-xl" onClick={() => router.replace("/products")}>
					Replace to Products
				</button>
				<button className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 border p-2 rounded-xl" onClick={() => router.back()}>
					goBack
				</button>
			</div>
		</div>
	);
}
