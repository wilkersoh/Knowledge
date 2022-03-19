import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import BasicLayout from "@/components/Layout/BasicLayout";

interface LayoutProps {
	type: "basic" | "side";
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ type = "basic", children }) => {
	// if (type === "basic") return <BasicLayout children={children} />;
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<meta name="Description" content={"test descript"}></meta>
				<title>{"Title page"}</title>
			</Head>

			<Header />

			{type === "basic" && <BasicLayout children={children} />}
		</div>
	);
};

export default Layout;
