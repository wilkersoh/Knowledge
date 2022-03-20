import { useMutation, useQueryClient, useQuery } from "react-query";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query {
			postsConnection {
				edges {
					node {
						author {
							name
							id
						}
						createdAt
						slug
						title
						excerpt
					}
				}
			}
			categories {
				name
				slug
			}
		}
	`;
	const results = await request(graphqlAPI, query);

	return results.postsConnection.edges;
};

export const getRecentPosts = async () => {
	const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        slug
        createdAt
      }
    }
  `;

	const result = await request(graphqlAPI, query);
	return result.posts;
};

export const getSimilarPosts = async () => {
	const query = gql`
		query GetPostDetails($slug: String!, $categories: [String!]) {
			posts(
				where: {
					slug_not: $slug
					AND: { categories_some: { slug_in: $categories } }
				}
				last: 3
			) {
				title
				slug
				createdAt
			}
		}
	`;

	const result = await request(graphqlAPI, query);
	return result.posts;
};
