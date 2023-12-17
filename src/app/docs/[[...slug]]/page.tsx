import React from "react";

type Props = {
  params: {
    slug: string[];
  };
};

const Page = ({ params: { slug } }: Props) => {
  console.log("slug", slug);

  if (slug?.length === 2) {
    return (
      <div>
        <h2>
          Viewing docs for Feature {slug[0]} - Consapts {slug[1]}
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Docs Home Page</h1>
    </div>
  );
};

export default Page;
