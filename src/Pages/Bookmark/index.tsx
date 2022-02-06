import CategorySelect from 'components/CategorySelect';
import PostList from 'components/PostList';
import React from 'react';
import { WrapperDiv } from 'styles/layoutStyle';

const Bookmark = () => {
  return (
    <>
      <WrapperDiv>
        <CategorySelect />
        <PostList />
      </WrapperDiv>
    </>
  );
};

export default Bookmark;
