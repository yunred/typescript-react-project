import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategorySelect = () => {
  return (
    <CategorySelectUL>
      <CategoryLI>
        <Link to="/category/전체게시판">전체게시판</Link>
      </CategoryLI>
      <CategoryLI>
        <Link to="/category/게시판1">게시판1</Link>
      </CategoryLI>
      <CategoryLI>
        <Link to="/category/게시판2">게시판2</Link>
      </CategoryLI>
      <CategoryLI>
        <Link to="/bookmark">저장한 게시물</Link>
      </CategoryLI>
    </CategorySelectUL>
  );
};
const CategorySelectUL = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  list-style: none;
  margin-bottom: 10px;
`;

const CategoryLI = styled.li`
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
export default CategorySelect;
