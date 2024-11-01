enum Role {
  // ADMIN = 0,
  // USER = 1,
  // GUEST = 2,
  ADMIN,
  USER,
  GUEST,
} // 글자를 숫자로 인식 할 수 잇는 타입이라고 정의한 enum 타입
//굳이 숫자를 주지 않아도 알아서 숫자가 자동 할당된다.

export const user1 = {
  name: "David",
  role: Role.ADMIN,
};

const user2 = {
  name: "Peter",
  role: Role.USER,
};

const user3 = {
  name: "Romeo",
  role: Role.GUEST,
};
