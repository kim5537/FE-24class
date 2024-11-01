import {
  useParams,
  useLocation,
  useMatch,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { CoinInterface } from "./Coins";
import { Helmet } from "react-helmet";

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

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) =>
    props.$isActive ? props.theme.textColor : props.theme.accentColor};
  color: ${(props) =>
    props.$isActive ? props.theme.accentColor : props.theme.textColor};
  padding: 8px 0;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.accentColor};
  }
`;

interface RouterParams {
  coinId: string;
}

interface LoaiotnState {
  state: string;
}

// interface InfoData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }

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

interface IsActive {
  $isActive: boolean;
}

const Coin = () => {
  // const [loading, setloading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LoaiotnState;
  const { coinId } = useParams<RouterParams | any>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setloading(false);
  //   })();
  // }, []);

  //바닐라자바 문법으로 구조분해할당을 한 후 구조분해 할당한 이름을 변경하는것 == isLoading: infoLoading , data: infoData
  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInterface>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinPrice(coinId), // 꼭 콜백으로
    refetchInterval: 5000, //5초당 한번식 새로운 데이터를 가져온다.
  });

  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <Helmet>
        <title>{state ? state : loading ? "Loading..." : infoData?.name}</title>
      </Helmet>
      <Header>
        <Title>{state ? state : loading ? "Loading..." : infoData?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <OverView>
            <OverViewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Symbol:</span>
              <span>{infoData?.symbol}</span>
            </OverViewItem>
            <OverViewItem>
              <span>open source?:</span>
              <span>{infoData?.is_active ? "Yse" : "No"}</span>
            </OverViewItem>
          </OverView>
          <Description>
            Infomation of {infoData?.type} !! Lorem ipsum dolor, sit amet
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
              <span>{priceData?.total_supply}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Max Supply:</span>
              <span>{priceData?.max_supply}</span>
            </OverViewItem>
          </OverView>
          <Tabs>
            <Tab $isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab $isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

//isActive는 우리가 프롭스를 만들기 위해 만들 것이다. chartMatch는 참일 때 객체를 반환한다. 따라서 false면 null을 반환한다.
//isActive 를 dom으로 전송 콘솔 에러 (styled-components 에러)
//styled-components에 있는 transient Props 사용하기
// 컴포넌트 내에서 스타일을 정의하도록 도와주는 역할을 학는 것 까지만 승인하고 dom에게 전달 안하게 하는 것 == 방법 $붙음
export default Coin;
