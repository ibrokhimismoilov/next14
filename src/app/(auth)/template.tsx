"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ name: "Login", href: "/login" },
	{ name: "Register", href: "/register" },
	{ name: "Forgot Password", href: "/forgot-password" }
];

export default function AuthTemplate() {
	const pathname = usePathname();
	const [val, setVal] = useState("");

	return (
		<div>
			<div className="p-3">
				<input value={val} type="text" onChange={(e) => setVal(e.target.value)} />
			</div>
			<nav className="border border-blue-300 p-3 flex justify-center gap-5">
				{navLinks.map(({ name, href }) => (
					<Link className={pathname === href ? "font-bold" : "text-blue-500"} key={href} href={href}>
						{name}
					</Link>
				))}
			</nav>
		</div>
	);
}
