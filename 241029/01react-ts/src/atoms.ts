import { atom } from "recoil";

//여러개를 정의 하기 위해 식별자 역할이 필요하고 이 역할을 key가 할 예정이다.
export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
