"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
	const router = useRouter();

	return (
		<div>
			<h1 className="mb-10">Order Product</h1>

			<div className="flex gap-5">
				<button key={"1"} className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 border p-2 rounded-xl" onClick={() => router.push("/")}>
					Navigate to Home
				</button>
				<button key={"2"} className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 border p-2 rounded-xl" onClick={() => router.replace("/products")}>
					Replace to Products
				</button>
				<button key={"3"} className="bg-orange-100 hover:bg-orange-200 transition-all duration-300 border p-2 rounded-xl" onClick={() => router.back()}>
					GoBack
				</button>
			</div>
		</div>
	);
}
