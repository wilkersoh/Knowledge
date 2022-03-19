import React from "react";

const BasicLayout: React.FC = ({ children }) => {
	return (
		<main>
			<div>{children}</div>
		</main>
	);
};

export default BasicLayout;
