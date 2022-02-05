import React from 'react';
import { Link } from 'react-router-dom';

const CategorySelect = () => {
  return (
    <>
      <li>
        <Link to="/category/전체게시판">전체게시판</Link>
      </li>
      <li>
        <Link to="/category/게시판1">게시판1</Link>
      </li>
      <li>
        <Link to="/category/게시판2">게시판2</Link>
      </li>
      <li>
        <Link to="/bookmark">저장한 게시물</Link>
      </li>
    </>
  );
};

export default CategorySelect;
