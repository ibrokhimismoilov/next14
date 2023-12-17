"use client";
import React, { ReactNode } from "react";
import { Header, Footer } from "..";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
	children: ReactNode;
}

export function Wrapper({ children }: IProps) {
	const pathname = usePathname();

	const links = [
		{ path: "/", title: "Home" },
		{ path: "/about", title: "About" },
		{ path: "/blog", title: "Blog" },
		{ path: "/products", title: "Products" },
		{ path: "/login", title: "Login" },
		{ path: "/register", title: "Register" },
		{ path: "/forgot-password", title: "Forgot password" }
	];

	return (
		<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Header />
			<nav style={{ display: "flex", justifyContent: "center", gap: 10 }}>
				{links.map((link) => (
					<Link className={pathname === link.path ? "font-bold" : "text-blue-500"} key={link.path} href={link.path}>
						{link.title}
					</Link>
				))}
			</nav>
			<main style={{ flex: 1, padding: 30 }}>{children}</main>
			<Footer />
		</div>
	);
}
