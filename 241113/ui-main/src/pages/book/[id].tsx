import React from "react";
import { useRouter } from "next/router";
import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import FetchOneBook from "@/lib/fetch-one-book";
import Head from "next/head";

export const getStaticPaths = () => {
  //빌드할 때 미리 해당 페이지가 있다고 정의하는 것.
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true, // 위에 정의한 페이지가 아니라면 없는 페이지로 지정하는 것.
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  //? = undefinde 가능성을 열어주는 것
  // ! = 무조건 있다고 확정하는 것
  // 둘 다 가능하다.
  const book = await FetchOneBook(Number(id));
  if (!book) return { notFound: true };

  return {
    props: { book },
  };
};

const Index = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    //1~3번을 제외하면 모든게 Fallback인 상황이다. 해당 함수는 Fallback가 값을 들고올 때 로딩페이지를 줄 수 있다.
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입북스" />
          <meta
            property="og:description"
            content="한입북스에 등록된 도서들을 만나보세요"
          />
        </Head>
        <div>로딩중~!!</div>
      </>
    );
  }
  if (!book) return "문제가 발생했습니다 다시 시도해 주세요";

  const { title, subTitle, description, author, coverImgUrl } = book;

  // const { id } = router.query;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url("${coverImgUrl}")` }}
        >
          <img src={coverImgUrl} alt={`${title} Image`} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {author}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
};

export default Index;
