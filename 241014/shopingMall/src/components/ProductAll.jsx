import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // 쿼리값을 찾아오는 것. (주소는 useParams)
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { productAction } from "../redux/actions/productAction"; //데이터를 액션객체로 만든 것.
//여기선 action의 행위를 담아서 reducer에게 보낼 것. 여기선 ui를 담당 --> 우린 액션을 쪼게 놓은 것 뿐
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
    //dispatch는 원래 객체를 담는다 type과 payload를 받았었다.
    //productAction에게 전달할 값을 줄 수 있는 getProduct -->getProduct는 우리가 만든것이다.
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3} key={index}>
            <ProductCard key={index} item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
