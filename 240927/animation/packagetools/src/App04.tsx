import { useEffect } from "react";
import {
  delay,
  motion,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  font-family: "Source Sans 3", sans-serif;
  background: linear-gradient(135deg , #e09, #d0e);
}

  ul,li {
    list-style: none;
  }

  a {
    text-decoration:none;
    color: inherit;
  }

`;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
const Wrapper = styled(motion.div)`
  width: 100%;
  height: 500vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

// const App04 = () => {
//   const x = useMotionValue(0);
//   const transFormer = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
//   //바꿀 값 , [초기값을 기준으로 값 범위:여기선 x좌표를 말함], [바뀔값].
//   // c초기값과 바뀔값의 수는 같아야한다.

//   //useEffect(() => {
//   //x.onChange(() => {});
//   // }, [x]);//옛날 문법 이젠 바꼈다
//   // useEffect(() => {
//   //   x.on("change", () => {
//   //     console.log(x.get());
//   //   });
//   // }, [x]);
//   // 해당 값이 변한값을 가져오는 방법은 get이다. 설정하는것 set

//   useEffect(() => {
//     transFormer.on("change", () => {
//       console.log(transFormer.get());
//     });
//   }, [x]);
//   return (
//     <>
//       <GlobalStyles />
//       <Wrapper>
//         {/* <button onClick={() => x.set(200)}>clickMe!</button> */}
//         <Box style={{ x, scale: transFormer }} drag="x" dragSnapToOrigin />
//       </Wrapper>
//     </>
//   );
// };

const App04 = () => {
  const { scrollY, scrollYProgress } = useScroll();
  //구조분해할당 {지표값 , 전체에서몇프로인가}
  useEffect(() => {
    scrollY.on("change", () => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);
  const x = useMotionValue(0);
  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0,210,238) , rgb(0,83,238))",
      "linear-gradient(135deg, rgb(238, 0, 147) , rgb(226, 80, 231))",
      "linear-gradient(135deg, rgb(50, 151, 50) , rgb(181, 206, 92))",
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useEffect(() => {
    scale.on("change", () => {});
  }, [x]);
  return (
    <>
      <GlobalStyles />
      <Wrapper style={{ background: gradient }}>
        <Box style={{ x, scale, rotateZ }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
};

//스타일에 x값은 위에서 선언한 useMotionValue의 x와 그 안에있는 x좌표를 말한다. x:x 이기때문에 {x}로 축약 가능하다.//

export default App04;
