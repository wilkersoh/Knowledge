import React from "react";

interface ContainerProps {
	className?: string;
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
	return (
		<div>
			<div className={`container md:mx-auto ${className}`}>{children}</div>
		</div>
	);
};

export default Container;
