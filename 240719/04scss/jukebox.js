const songs = document.querySelectorAll(".albumTable_song");
// songs.forEach((song) => {
//   console.log(song);
// });

for (let song of songs) {
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    console.log(e);
    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

// e객체 > target을 찾아왔는데 || target을 쓰지 않는 경우도 있다. currentTarget을 찾아오라는 경우가 있다.
//차이점. current~ :이벤트 핸들러가 부착되어진 요소를 의미한다.클릭을 직접적으로 하는 요소
//targer: 실제 이벤트가 발생된 요소를 의미
//현제 예제앤 둘이 상관없다. 이유는 이벤트발생하는 곳이 바로 이벤트를 실행하는 곳이기 때문.
//예를 들면 button태그에 span태그안 글자가 있다면. 사람들들은 글자를 틀릭하게 되기 때문에 targer은 이벤트가 실행된 span태그를 들고오게 된다. 그러나 current~는 button태그를 들고온다.
//근데 e를 부르면 항목에선 curr~에 null이 나올까? 콘솔에 입력되는건 실제 이벤트가 발생하는 것 보다 좀 늦다. 그렇기 때문에 동시에 발생된 curren가 null로 나온다.
