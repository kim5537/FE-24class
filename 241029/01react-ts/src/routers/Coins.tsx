import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Header = styled.header`
  font-size: 32px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const CoinList = styled.ul`
  width: 560px;
`;

const Coin = styled.li`
  width: 100%;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  a {
    color: inherit;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: auto;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
      );
      const json = await response.json();
      setCoins(json.slice(0, 101));
    })();
    setLoading(false);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coin List</Title>
      </Header>
      <CoinList>
        {loading ? (
          <Loader> Loading.... </Loader>
        ) : (
          coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                {coin.rank}.
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &raquo; {coin.name} Information ;
              </Link>
            </Coin>
          ))
        )}
      </CoinList>
    </Container>
  );
};

export default Coins;
