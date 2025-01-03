import styles from "./page.module.css";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import delay from "@/util/delay";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { Metadata } from "next";

// export const dynamic = "force-dynamic";

//특정 페이지의 유형을 강제로 static, dynamic 페이지로 설정하는 옵션들
//1. auto  : 페이지 컴포넌트의 기본 값을 보장 한다 ==> 강제하지 않겠다. (defualt)
//2.force-dynamic : 페이지를 강제적으로  dynamic 페이지로 설정한다.
//3.force-static :
//4.error

const RecoBooks = async () => {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    // { cache: "force-cache" }
    {
      next: {
        revalidate: 3,
      },
    }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const AllBooks = async () => {
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export const metadata: Metadata = {
  title: "한입 북스",
  description: "한입 북스에 등록된 도서를 만나 보세요",
  openGraph: {
    title: "한입 북스",
    description: "한입 북스에 등록된 도서를 만나 보세요",
    images: ["/thumbnail.png"],
  },
};

const Home = async () => {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={10} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
