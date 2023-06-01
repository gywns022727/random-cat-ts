import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Modal from "react-modal";
import { getCats } from "../../api/getCats";
import { GetCatsResponse } from "../../api/getCats";
import { Container, Title, List, Item, Img } from "./styled";
import Button from "../../components/Button";

Modal.setAppElement("#root");

export default function Index() {
  const [cats, setCats] = useState<GetCatsResponse[]>([]); // 고양이 사진 data들을 담아놓을 state
  const [isOpen, setIsOpen] = useState<boolean>(false); // Modal의 상태를 담아놓은 state

  const { data, isFetching, refetch } = useQuery(["cats"], getCats); // react-query를 사용하여 고양이 사진 가져오는 api를 실행함

  // data: api로 불러온 response data
  // isFetching: api요청으로 fetch가 일어나는 상황을 알려줌
  // refetch: api 재요청

  const refresh = () => refetch(); // react-query의 refetch 함수를 실행시키는 함수

  const handleOpenModal = () => setIsOpen(true); // Modal의 상태를 true(보여줌)으로 바꿔주는 함수
  const handleCloseModal = () => setIsOpen(false); // Modal의 상태를 false(숨김)으로 바꿔주는 함수

  // 위에서 쓰는 data가 변경 될 때마다 밑의 함수가 실행됨
  useEffect(() => {
    if (!data) return; // data가 undefined 일 수 있어서 if문으로 걸러줌
    setCats(data); // data가 값이 온전히 있으면 cats에 담아줌
    // console.log({ data });
  }, [data]);

  return (
    <Container>
      <Title>간식 모음</Title>
      <Button bgColor="#78c4ff" color="#fff" onClick={refresh}>
        새로고침
      </Button>
      {isFetching && <div>로디중입니다...</div>}
      {!isFetching && (
        <List>
          {cats.map(({ id, url }) => {
            return (
              <Item key={id} onClick={handleOpenModal}>
                <Img src={url} alt={id} />
              </Item>
            );
          })}
        </List>
      )}
      <Modal
        isOpen={isOpen} // Modal이 열려있는 상태인가
        shouldCloseOnOverlayClick={true} // Modal의 바깥을 클릭하면 Modal이 꺼지는가
        onRequestClose={handleCloseModal} // Modal을 끄는 요청을 하면 실행되는 함수
      ></Modal>
    </Container>
  );
}
