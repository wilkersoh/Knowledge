import { GetStaticProps } from "next";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";
import { QueryClient, useQuery, dehydrate } from "react-query";
import { request, gql } from "graphql-request";
import { getPosts } from "@/services/Posts/index";

type PostData = {
	node: {
		author: {
			name: string;
			id: string;
		};
		createdAt: string;
		excerpt: string;
		slug: string;
		title: string;
	};
};

export default function Home() {
	const { data: posts, isLoading } = useQuery<PostData[]>("posts", getPosts);

	console.log("posts:  :>> ", posts);
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
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery<PostData[]>("posts", getPosts);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
