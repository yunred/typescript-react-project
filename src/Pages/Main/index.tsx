import React, { FC } from 'react';
import PostInsert from 'components/PostInsert';
import PostList from 'components/PostList';

const Main: FC = () => {
  return (
    <>
      <>
        <PostInsert />
        <PostList />
      </>
    </>
  );
};

export default Main;
