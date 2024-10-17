//이번엔 함수로 해보자.

//초기값 설정
let initialState = { contactList: [], keyword: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action; //객체형태라 구조분해할당으로 한 꺼플 벗김

  // switch (type) {
  //   //해당 타입은 contactform에 있는 addContact에 정의햇다
  //   case "ADD_CONTACT":
  //     return {
  //       ...state,
  //       contactList: [
  //         ...state.contactList,
  //         { name: payload.name, phoneNumber: payload.phoneNumber },
  //       ],
  //     };
  //   case "SEARCH":
  //     return {
  //       ...state,
  //       keyword: payload.keyword,
  //     };
  //   default:
  //     return { ...state }; //복제값 리턴. 원본은 건드리면 안됨.
  // }
  //// 수정 필요
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
      return;
  }
};

export default reducer;
