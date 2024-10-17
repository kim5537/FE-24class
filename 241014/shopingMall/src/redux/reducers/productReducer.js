let initialState = { productList: [] }; // 초기값

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCESS":
      return { ...state, productList: payload.data };
    default:
      return { ...state }; // 최종값
  }
};

export default productReducer;
