//외부 api데이터를 가져올 아이이다. 그 값이 productreducer로 가고 이게 store로 갈 것.
const getProduct = (searchQuery) => {
  //상품의 정보값을 찾아 올 것 ==> 반환값은 객체. 왜냐면 원래 객체로 반환됨
  //지금 productAll에서 이걸 사용하는중 searchQuery는productAll에서 받음
  return async (dispatch) => {
    //리듀서에게 보낼 dispatch를 받아올수잇다. 프로덕트 올에서 받아서.
    const url = `https://my-json-server.typicode.com/kim5537/musinsaMall/products`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCESS", payload: { data } }); //payload는 객체값으로 움직여야함 무조건.
  };
};

export const productAction = { getProduct };
