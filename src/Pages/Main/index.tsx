import React, { FC } from 'react';
import PostInsert from 'components/PostInsert';
import PostList from 'components/PostList';
import CategorySelect from 'components/CategorySelect';

const Main: FC = () => {
  return (
    <>
      <>
        <CategorySelect />
        <PostInsert />
        <PostList />
      </>
    </>
  );
};

export default Main;
