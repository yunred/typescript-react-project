import { RootState } from 'modules';
import { addPost, changePostContent, changePostSave } from 'modules/post';
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostInsert from 'components/PostInsert';
import shortId from 'shortid';
import PostList from 'components/PostList';

const Main: FC = () => {
  const posts = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const onChangePost = (postId: string) => {
    dispatch(changePostContent(postId));
  };

  const onChangeSave = (postId: string) => {
    dispatch(changePostSave(postId));
  };

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
