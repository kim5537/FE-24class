//class 확장하기

// //class 정의하기
// class Student {
//   //Field - 인스턴스 객체에 들어갈 키 값을 관리함
//   name;
//   age;
//   grade;

//   //생성자 함수 - Field 값을 채워 넣는다
//   constructor(name: string, age: number, grade: number) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }

//   //메서드
//   study() {
//     console.log(`${this.name}은 열심히 공부함`);
//   }

//   introduce() {
//     console.log(
//       `안녕하세요 ${this.age}살 ${this.grade}학년 ${this.name}입니다 `
//     );
//   }
// }

// const StudentB = new Student("Devid", 20, 2);
// console.log(StudentB.introduce());

// class StudentDeveloper extends Student {
//   favoritSkill;

//   constructor(name: string, age: number, grade: number, favoritSkill: string) {
//     super(name, age, grade);
//     this.favoritSkill = favoritSkill;
//   }

//   porgramming() {
//     console.log(`${this.name}는 ${this.favoritSkill}로 프로그래밍 합니다.`);
//   }
// }

// const studentC = new StudentDeveloper("Ronaldo", 40, 2, "TS");
// console.log(studentC.porgramming());

///// 타입 스크립트에만 있는 접근 제어자! --------------------------------------------
//총 3가지 잇다

//1, public : 모든 범위에서 접근 할 수 있도록 (기본값)

// class Student {
//   public name;
//   public age;
//   public grade; // 기본값이여서 생략이 가능했던것

//   constructor(name: string, age: number, grade: number) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

//2. private : class 내부에서만 접근 가능
// class Student {
//   private name; // 섞어서 사용 가능
//   public age;
//   public grade;

//   constructor(name: string, age: number, grade: number) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

// class StudentDeveloper extends Student {
//   favoritSkill;

//   constructor(name: string, age: number, grade: number, favoritSkill: string) {
//     super(name, age, grade);
//     this.favoritSkill = favoritSkill;
//   }

//   porgramming() {
//     console.log(`${this.name}는 ${this.favoritSkill}로 프로그래밍 합니다.`); //name 못 쓴다. 확장된 애라서
//   }
// }

//3. protected : class 내부 & 상속 받은 파생 클래스도 접근 가능

//필드에서 안 적어도 바로 사용
class Student {
  constructor(
    public name: string,
    private age: number,
    protected grade: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
