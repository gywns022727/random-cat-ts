import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCats } from "../../api/getCats";
import { GetCatsResponse } from "../../api/getCats";
import { Container, Title, List, Item, Img } from "./styled";
import Button from "../../components/Button";

export default function Index() {
  const [cats, setCats] = useState<GetCatsResponse[]>([]);

  const { data, isFetching, refetch } = useQuery(["cats"], getCats);

  const refresh = () => refetch();

  useEffect(() => {
    if (!data) return;
    setCats(data);
    console.log({ data });
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
              <Item key={id}>
                <Img src={url} alt={id} />
              </Item>
            );
          })}
        </List>
      )}
    </Container>
  );
}
