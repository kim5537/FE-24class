import styles from "./page.module.css";
import ClientComponent from "../../components/client-component";
import ServerComponent from "../../components/server-component";
export default function Home() {
  // 여긴 서버 컴포넌트 페이지가 된다.

  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
