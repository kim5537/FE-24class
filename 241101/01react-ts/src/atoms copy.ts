import { atom, selector } from "recoil";

// export const minuteState = atom({
//   key: "minutes",
//   default: 0,
// });

// //selector : state값을 바꿔보자
// export const hourSelector = selector({
//   key: "hours",
//   get: ({ get }) => {
//     const minutes = get(minuteState);
//     return minutes / 60;
//   },
//   set: ({ set }, newValue) => {
//     const minutes = Number(newValue) * 60;
//     set(minuteState, minutes);
//   },
// }); // get set 두가지를 사용해볼것
