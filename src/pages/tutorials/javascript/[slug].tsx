import { getPosts, getPostsDetails } from "@/services/Posts";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

const Javascript: React.FC = () => {
	return (
		<div>
			<div>javascript</div>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getPosts();

	return {
		paths: posts.map(({ node: { slug } }) => {
			return {
				params: slug,
			};
		}),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const data = await getPostsDetails(params.slug);

	return {
		props: {
			post: data,
		},
	};
};

export default Javascript;
