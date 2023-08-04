import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import { IProduct } from "./types/product.types";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data: IProduct[]) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container className="wrapper min-vh-100 p-0">
      <Header />
      <Row
        as="main"
        className="px-2 pt-4 pb-5 px-md-5 pt-md-5 pb-md-5 row-gap-5"
      >
        {products.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={6} lg={4} xl={3}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
