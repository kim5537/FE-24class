import api from "./env.js";
const form = document.querySelector("form");
console.log(form);
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api.API_KEY}&language=ko&page=1`;

//3
const movieDetail = (e) => {
  const { id } = e.target.parentElement;
  // console.log(id);
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, "_blank");
};

//2 태그를 만듬
const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.querySelector(".contents");
  // console.log(parent);
  const movie = document.createElement("div");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const info = document.createElement("div");
  const h3 = document.createElement("h3");
  const date = document.createElement("div");
  const rates = document.createElement("div");

  movie.className = "movie";
  detail.className = "detail";
  info.className = "info";
  date.className = "date";
  rates.className = "rates";

  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${original_title}(${title})`;
  date.innerText = release_date;
  rates.innerText = `⭐⭐⭐${vote_average}`;

  info.append(date, rates);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  poster.addEventListener("click", movieDetail);
};

//1
fetch(url)
  .then((Response) => Response.json())
  .then(({ results }) => {
    // console.log(results);
    // 구조분해할당 ==> 중괄호한 이윤 객체이기 때문
    results.forEach((movie) => {
      //내용이 많을 꺼니까 리팩토링.
      createBlock(movie);
    });
  });

//5
const removeAll = () => {
  //클래스를 모두 무비로 가지고 있음
  const movies = document.querySelectorAll(".movie");
  movies.forEach((movie) => {
    movie.remove();
  });
};

//4
const searchMovie = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  // console.log(input.value);
  //온점표기법으로 벨류를 확인 즉 구조분해할당 가능
  const { value: keyword } = input;
  //keuword로 바꾼다.
  //구조분해할당을 할땐 찾아올 값과 그 값의 이름이 같아야하기 때문에 value를 먼저 적고 후에 키워드를 적음으로서 벨류를 키워드로 바꿨다.
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${api.API_KEY}&query=${keyword}&include_adult=false&language=ko&page=1;`;

  if (keyword) {
    removeAll(); //5 실행문
    fetch(searchURL)
      .then((Response) => Response.json())
      .then(({ results }) =>
        results.forEach((movie) => {
          createBlock(movie);
          //검색이 실행되면 기존에 가지고 있던 돔의 노드는 전부 제거하지 않으면 기존에 요소 밑에 깔리게 된다. 그래서 우리는 돔을 삭제하면 좋다. >> 5
        })
      );
    // .then((result) => console.log(result.results));
  }
};
//4 검색
form.addEventListener("submit", searchMovie);
