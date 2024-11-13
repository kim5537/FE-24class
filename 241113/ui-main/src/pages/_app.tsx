import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter(); //페이지를 어딘가로 이동함
  const onclickButton = () => {
    router.push("/test");
  };
  return (
    <>
      <header>
        <Link href={"/"}>Index</Link>
        &nbsp;
        {/* //nonblockspace라는 뜻으로 줄 바꿈없는 띄어쓰기를 말한다. */}
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onclickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

// Component :  가장 최종 루트 파일이라는 곳에 자식 요소의 페이지를 말한다.
//pageProps : 자식요소에게 보낼 props 값을 가지고 움직 일 수 있다
