import React from 'react';
import { RootState } from 'modules';
import { IPost, removePost, changePostSave } from 'modules/post';
import { useSelector, useDispatch } from 'react-redux';

const PostList = () => {
  const posts = useSelector((state: RootState) => state.post);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const onRemovePost = (postId: string) => {
    dispatch(removePost({ id: postId }));
  };

  const onChangeSave = (postId: string) => {
    dispatch(changePostSave(postId));
  };

  return (
    <>
      <div>
        {posts.map((post: IPost, idx: number) => {
          return (
            <>
              <div key={post.id}>
                {post.category} ||
                {post.User.name} ||
                {post.content}
              </div>
              {post.User.id === user.userId ? (
                <button type="button" onClick={() => onRemovePost(post.id)}>
                  삭제
                </button>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
