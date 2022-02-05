import React from 'react';
import { RootState } from 'modules';
import { IPost } from 'modules/post';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostComponent from './PostComponent';

const PostList = () => {
  const posts = useSelector((state: RootState) => state.post);

  const { selected } = useParams();
  console.log(selected);

  return (
    <>
      <div>
        {posts.map((post: IPost, idx: number) => {
          return (
            <>
              {selected && selected === '전체게시판' ? (
                <PostComponent post={post} />
              ) : selected === post.category ? (
                <PostComponent post={post} />
              ) : !selected ? (
                <PostComponent post={post} />
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
