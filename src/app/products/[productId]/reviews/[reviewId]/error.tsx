"use client";

interface IProps {
	error: Error;
}

const ErrorBoundary = ({ error }: IProps) => {
	return (
		<section>
			<h1 className="text-xl weight-700">Error Boundary</h1>
			<pre>{JSON.stringify(error.message, null, 2)}</pre>
		</section>
	);
};

export default ErrorBoundary;
