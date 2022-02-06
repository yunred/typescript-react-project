import React, { FC } from 'react';
import PostInsert from 'components/PostInsert';
import PostList from 'components/PostList';
import CategorySelect from 'components/CategorySelect';
import { WrapperDiv } from 'styles/layoutStyle';

const Main: FC = () => {
  return (
    <>
      <WrapperDiv>
        <CategorySelect />
        <PostInsert />
        <PostList />
      </WrapperDiv>
    </>
  );
};

export default Main;
