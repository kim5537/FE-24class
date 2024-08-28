import api from "./env.js";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api.API_KEY}&language=ko&page=1`;

//3
const movieDetail = (e) => {
  const { id } = e.target.parentElement;
  // console.log(id);
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, "_blank");
};

//2
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
