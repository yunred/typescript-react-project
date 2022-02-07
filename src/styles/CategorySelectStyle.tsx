import styled from 'styled-components';

export const CategorySelectUL = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  list-style: none;
  margin-bottom: 10px;
`;

export const CategoryLI = styled.li`
  flex: 1;
  height: 40px;
  line-height: 40px; //세로 중앙정렬
  background-color: #ffffff;
  a {
    text-decoration: none;
    display: block; //a 태그 범위
    color: black;
    :hover {
      opacity: 0.7;
      background-color: #fcfcfc;
    }
  }
`;
