import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
	const list = [
		{ path: "/products/1", title: "Product - 1", replace: false },
		{ path: "/products/2", title: "Product - 2", replace: false },
		{ path: "/products/3", title: "Product - 3", replace: false },
		{ path: "/products/4", title: "Product - 4", replace: true }
	];

	return (
		<div>
			<h1>Products list</h1>
			<br />
			<hr />
			<br />
			<ul>
				{list.map((link) => (
					<li>
						<Link href={link.path} replace={link.replace}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default page;
