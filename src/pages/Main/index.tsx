import { Container, Title } from "./styled";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <Container>
      <Title>랜덤 고양이 사진 만들기</Title>
      <Button bgColor="#78c4ff" color="#fff" pointer={true}>
        <Link to={"/cat"}>시작!</Link>
      </Button>
    </Container>
  );
}
