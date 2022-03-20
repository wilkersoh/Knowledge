import React from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = React.useRef(new QueryClient());

	return (
		<QueryClientProvider client={queryClient.current}>
			{/* place everything inthe cache in react query server, then grab this cache and send it in by a props that's callced dehydratedState */}
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default MyApp;
