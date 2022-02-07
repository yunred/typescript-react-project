import React from 'react';
import { Link } from 'react-router-dom';
import * as S from 'styles/CategorySelectStyle';

const CategorySelect = () => {
  return (
    <S.CategorySelectUL>
      <S.CategoryLI>
        <Link to="/category/전체게시판">전체게시판</Link>
      </S.CategoryLI>
      <S.CategoryLI>
        <Link to="/category/게시판1">게시판1</Link>
      </S.CategoryLI>
      <S.CategoryLI>
        <Link to="/category/게시판2">게시판2</Link>
      </S.CategoryLI>
      <S.CategoryLI>
        <Link to="/bookmark">저장한 게시물</Link>
      </S.CategoryLI>
    </S.CategorySelectUL>
  );
};

export default CategorySelect;
