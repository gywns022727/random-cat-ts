import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 320px;
  height: 100%;
`;

export const Title = styled.h2`
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  list-style: none;
  &:hover {
    transform: scale(1.5);
    transition: 0.3s;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
