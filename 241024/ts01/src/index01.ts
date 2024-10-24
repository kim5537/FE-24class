// 자주 맞닥들일 서로소
// 외부 API 데이터를 찾아오게 되었을 때, 타입을 지정하기
//3가지 형태의 객체를 만들어 보자

// const loading = {
//   state: "LOADING",
// };

// const failed = {
//   state: "FAILED",
//   error: {
//     message: "오류발생",
//   },
// };

// const success = {
//   state: "SUCCESS",
//   response: {
//     data: "movie ...",
//   },
// };

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

// //객체의 값이 들어올 것 이다.
// const processResult = (task: AsyncTask) => {
//   switch (task.state) {
//     case "LOADING": {
//       console.log("로딩중...");
//       break;
//     }
//     case "FAILED": {
//       console.log(`에러 발생 : ${task.error?.message}`); // 여기 error도 ? 필수(옵션널체이닝 필수)
//       break;
//     }
//     case "SUCCESS": {
//       console.log(`성공 : ${task.response?.data}`);
//       break;
//     }
//   }
// };

//"LOADING" | "FAILED" | "SUCCESS" 를 타입으로 바꾸면 더욱 깔금하게 사용 할 수 있다. ? 필요 없음

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

//서로 완전 독립이 되었다. 때문에 옵셔널이 필요 없어지는 것이다.

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중...");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
};
