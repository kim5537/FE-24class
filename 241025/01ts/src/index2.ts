// 제네릭 + 인터페이스 예제 2
// interface Student {
//   name: string;
//   profile: {
//     type: string;
//     school: string;
//   };
// }

interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: string;
}

interface User<T> {
  name: string;
  //서로소 유니온 타입
  profile: T;
}

const developerUser: User<Developer> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "typeScript",
  },
};

const studentUser: User<Student> = {
  name: "perter",
  profile: {
    type: "stydent",
    school: "서울대학교",
  },
};

const gotoSchool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교했습니다.`);
};
