import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Book /[id] Page 입니다 : {id}</div>;
};

export default Page;
