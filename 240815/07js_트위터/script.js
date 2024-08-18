const button = document.querySelector("#tweetButton");

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += " #어쩌구 #저쩌구";
  //해쉬를 넣기위해서 let으로 선언 아니라면 const도 가능하다.
  const encondedText = encodeURIComponent(tweetText);
  //우리가 적은 글을 컴퓨터가 이해하는 언어로 바꿔주는 함수 encodeURIComponent()

  const tweetURL = `https://twitter.com/intent/tweet?text=${encondedText}`;

  window.open(tweetURL);
  //open() 입력된 url을 열겠다는 의미이다.
});
