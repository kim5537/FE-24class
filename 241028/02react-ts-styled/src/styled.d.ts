//태마값을 여기서 정의하겠다는 의미이다.
//스타일 컴포넌트안에 타입이 없기 때문
//우리가 직접 타입을 지정하기
import styled from "styled-components";

//styled-components에 이러한 타입이 있다는 것을 선언
//스타일 컴포넌트는 객체형태이다 - interface >> 이름은 뭐든 상관 없음
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
  }
}
// 이러면 styled-components 안에 정의된다.  때문에 import할 때 styled-components에서 가져오게 된다.
