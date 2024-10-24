//서로소 유니온

// type Admin = {
//   name: string;
//   kickCount: number;
// };

// type Member = {
//   name: string;
//   point: number;
// };

// type Guest = {
//   name: string;
//   visitCounte: number;
// };

// type User = Admin | Member | Guest; // 유니온 타입 - 타입이 여러개

// const login = (user: User): void => {
//   if ("kickCount" in user) {
//     //매개변수로 들어 온 user의 타입중에 kickCount키를 가진 타입을 말한다 즉 Admin를 말한다.
//     console.log(
//       `${user.name}은 관리자 이며, ${user.kickCount}회 관리하였습니다.`
//     );
//   } else if ("point" in user) {
//     console.log(
//       `${user.name}은 맴버이며, 포인트 ${user.point}가 적립 되었습니다..`
//     );
//   } else {
//     console.log(
//       `${user.name}은 게스트 이며 , ${user.visitCounte}번 방문 하였습니다`
//     );
//   }
// };
// 코드상 문제는 없다. 그러나 두개를 복수로 가져 갈 수 없다. 유니온으로 만들었지만 교집합으로 나올 수 없다.
//직관적으로 작성해 볼까?  유니온 이지만 지금 코드는 서로 연관 없는 서로소 관계이다.

type Admin = {
  tag: "ADMIN"; // 테그를 만들어 준다.
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCounte: number;
};

type User = Admin | Member | Guest;

const login = (user: User): void => {
  // 해당 태그를 기준으로 switch
  switch (user.tag) {
    case "ADMIN": {
      console.log(
        `${user.name}은 관리자 이며, ${user.kickCount}회 관리하였습니다.`
      );
      break;
    }
    case "MEMBER": {
      console.log(
        `${user.name}은 맴버이며, 포인트 ${user.point}가 적립 되었습니다..`
      );
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}은 게스트 이며 , ${user.visitCounte}번 방문 하였습니다`
      );
      break;
    }
  }
};
