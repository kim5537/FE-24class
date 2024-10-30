export const fetchCoins = () => {
  return fetch(
    "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
  ).then((response) => response.json());
};

//코인 아이디값을 받아야한다. - 아이디에 따라 해당 코인의 정보가 나오는 데이터이기 때문
export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(
    `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  ).then((Response) => Response.json());
};

export const fetchCoinPrice = (coinId: string | undefined) => {
  return fetch(
    `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  ).then((Response) => Response.json());
};

export const fetchCoinHistory = (coinIn: string | undefined) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinIn}&start=${startDate}&end=${endDate}`
  ).then((Response) => Response.json());
};
