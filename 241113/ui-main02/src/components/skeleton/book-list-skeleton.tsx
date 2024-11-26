import React from "react";
import BookItemSkeleton from "./book-item-skeleton";

const BookListSkeleton = ({ count }: { count: number }) => {
  return new Array(count)
    .fill(0)
    .map((_, index) => (
      <BookItemSkeleton key={`book-item-skeleton-${index}`} />
    ));
};

export default BookListSkeleton;
