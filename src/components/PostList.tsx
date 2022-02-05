import React from 'react';
import { RootState } from 'modules';
import { IPost } from 'modules/post';
import { useSelector } from 'react-redux';

const PostList = () => {
  const posts = useSelector((state: RootState) => state.post);
  return (
    <>
      <div>
        {posts.map((post: IPost, idx: number) => {
          return (
            <>
              <div key={post.id}>
                {post.category}
                {post.User.name}
                {post.content}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
