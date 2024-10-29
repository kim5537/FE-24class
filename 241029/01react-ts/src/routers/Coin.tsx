import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
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

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
`;

const OverView = styled.div`
  width: 600px;
  color: ${(props) => props.theme.bgColor};
`;

const OverViewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  background: ${(props) => props.theme.textColor};
  border-radius: 10px;
  padding: 10px 20px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Description = styled.div`
  background: ${(props) => props.theme.accentColor};
  width: 600px;
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

interface RouterParams {
  coinId: string;
}

interface LoaiotnState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

const Coin = () => {
  const [loading, setloading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LoaiotnState;
  const { coinId } = useParams<RouterParams | any>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
    setloading(false);
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state ? state : loading ? "Loading..." : info?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <OverView>
            <OverViewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Symbol:</span>
              <span>{info?.symbol}</span>
            </OverViewItem>
            <OverViewItem>
              <span>open source?:</span>
              <span>{info?.is_active ? "Yse" : "No"}</span>
            </OverViewItem>
          </OverView>
          <Description>
            Infomation of {info?.type} !! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quisquam sequi, aliquam omnis autem
            minima eum delectus doloremque vitae facere, hic beatae ipsum quas.
            Excepturi officiis libero id, itaque dignissimos qui! Quisquam
            sequi, aliquam omnis autem minima eum delectus doloremque vitae
            facere, hic beatae ipsum quas. Excepturi officiis libero id, itaque
            dignissimos qui!
          </Description>
          <OverView>
            <OverViewItem>
              <span>Total Supply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverViewItem>
          </OverView>
        </>
      )}
    </Container>
  );
};

export default Coin;
