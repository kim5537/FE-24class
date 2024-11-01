import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  passwordCheck: string;
  extraError?: string;
}

const ToDoList01 = () => {
  // const [toDo, setToDo] = useState("");
  // const [toDoError, setToDoError] = useState("");

  // const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (toDo.length < 10) {
  //     return setToDoError("To Do should be longer! TT");
  //   }
  //   console.log(toDo);
  // };
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log(e.currentTarget.value);
  //   //target의 값을 읽기 못한다. currentTarget을 사용하지만 null이라고 뜨는 이유는 비동기로 값을 가져왔기 때문
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setToDoError("");
  //   setToDo(value);
  // };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<Form>({
    defaultValues: {
      email: "@naver.com", //입력하지 않았을 때 초기값 설정
    },
  });

  // console.log(register("toDo")); 객체형태로 식별자를 첫 인자로 받고 뒤는 콜백을 받는다 값을 입력한다. 전개연산자 형태로 사용한다(전개연산자는 아니다.)
  //handleSubmit : 서브밋이 실행될 때 발생 될 함수를 말한다. - 내부에 콜백함수가 값을 찾아온다.
  //console.log(watch()); // 입력된 값을 찾아오는 함수

  const onValid = (data: Form) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "PassWord is not the same..." },
        {
          shouldFocus: true, //틀린 항목에 포커스
        }
      );
    }
    setValue("userName", ""); // 값을 보낸 후 빈창으로
    // setError("extraError", { message: "지금 로딩중" });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/g,
              message: "이멜 확인",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", {
            required: "Write Here",
            // validate: (value) => !value.includes("test"), //필터 설정
            validate: (value) =>
              value.includes("test") ? "no test allowed" : true,
          })}
          type="text"
          placeholder="first Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="last Name"
        />
        <input
          {...register("userName", { required: true, minLength: 10 })}
          type="text"
          placeholder="user Name"
        />
        <input
          {...register("password", {
            required: "Password is requlired...",
            minLength: {
              value: 5,
              message: "Your s메세지 짧다",
            },
          })}
          type="text"
          placeholder="password"
        />
        <span>{errors?.password?.message as string}</span>

        <input
          {...register("passwordCheck", { required: true })}
          type="text"
          placeholder="password check"
        />
        <span>{errors?.passwordCheck?.message as string}</span>
        <input type="submit" value={"ADD"} />
        {/* <span>{errors?.extraError?.message as string}</span> */}
      </Form>
    </Container>
  );
};

export default ToDoList01;
