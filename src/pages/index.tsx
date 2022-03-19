import { GetStaticProps } from "next";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";

import { getPosts } from "@/services/index";

export default function Home({ posts }) {
	console.log(posts);

	return (
		<Layout type="basic">
			<Container>
				{posts.map((post, index) => (
					<PostCard key={index} post={post.node} />
				))}
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = (await getPosts()) || [];

	return {
		props: {
			posts,
		},
	};
};
