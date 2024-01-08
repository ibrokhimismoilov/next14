"use client";

interface IProps {
	error: Error;
	reset: VoidFunction;
}

const ErrorBoundary = ({ error, reset }: IProps) => {
	return (
		<section>
			<h1 className="text-xl weight-700">Error Loading Product</h1>
			<pre>{JSON.stringify(error.message, null, 2)}</pre>
			<button className="px-5 py-3 border border-gray rounded" onClick={reset}>
				Try Again
			</button>
		</section>
	);
};

export default ErrorBoundary;
