import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import MobileHamburger from "@/components/Header/MobileHamburger";
import Features from "@/components/Header/Features";

const categories = [
	{ name: "Javascript", slug: "javascript" },
	{ name: "Life", slug: "life" },
];

const Header: React.FC = () => {
	return (
		<div className="sticky top-0 z-[5]">
			<Container className="border-rose-50 border-2">
				<header className="flex items-center text-white justify-between">
					<div className="flex items-center">
						<div className="mr-4 text-2xl">
							<Link href="/">
								<span className="cursor-pointer font-bold text-4x">Yz</span>
							</Link>
						</div>

						<nav className="hidden md:contents">
							<ul className="flex ">
								{categories.map((category) => (
									<li
										key={category.slug}
										className="flex justify-center items-center m-3"
									>
										<Link href={`/category/${category.slug}`}>
											<span className="align-middle font-semibold cursor-pointer">
												{category.name}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>

					<Features />

					<MobileHamburger />
				</header>
			</Container>
		</div>
	);
};

export default Header;
