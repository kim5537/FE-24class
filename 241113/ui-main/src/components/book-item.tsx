import React from "react";
import type { BookData } from "@/type";
import Link from "next/link";
import style from "./book-item.module.css";

const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link className={style.container} href={`/book/${id}`}>
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
