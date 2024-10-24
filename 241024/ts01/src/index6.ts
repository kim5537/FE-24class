interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move: () => void;
}

//implements 로 가져온 타입을 반드시 이행해야한다.
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}
  move() {
    console.log(`${this.moveSpeed}속도로 움직임!`);
  }
}
