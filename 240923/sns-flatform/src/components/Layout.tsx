//프레그먼트 <></>는 최상위요소라는 걸 보여주는 것. 큰 영향은 없다.
import { Outlet } from "react-router-dom";
//Outlet은 마치 아울렛에서 장보듯 자식요소로 들어오는 것들을 수집하는 중간 매개역할을 한다. app 에서 createBrowserRouter으로 children을 지정해줘서 들어간다.//때문에 layout은 최상위 요소이다. 여기서부터 하위계층구조로 컴포넌트가 설계된다.//
//만약 Layout에 직접 무언가를 적어주면 모든 페이지에 나타는 요소가 된다.

const Layout = () => {
  return (
    <>
      <h2>Layout</h2>
      <Outlet />
    </>
  );
};

export default Layout;
