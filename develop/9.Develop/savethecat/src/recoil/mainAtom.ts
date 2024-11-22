import { atom } from "recoil";

interface sceneList {
  location: string;
  place: string;
  time: string;
  weather: string;
}

export interface storyTemp {
  id: number;
  scene: sceneList;
  situation: string;
  emotion: boolean;
  conflict: string;
  color: string;
}

interface storyState {
  [key: string]: storyTemp[];
}

const chapter1 = atom<storyState>({
  key: "storyBoard",
  default: {
    chapter1: [],
    chapter2: [],
    chapter3: [],
    chapter4: [],
  },
});
