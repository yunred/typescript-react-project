import React from 'react';
import { RootState } from 'modules';
import { IPost, removePost, changePostSave } from 'modules/post';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

interface Props {
  post: IPost;
}
const PostComponent = ({ post }: Props) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const onRemovePost = (postId: string) => {
    dispatch(removePost({ id: postId }));
  };
  const onChangeSave = (postId: string) => {
    dispatch(changePostSave({ id: postId }));
  };
  return (
    <>
      <div key={post.id}>
        {post.category} ||
        {post.User.name} ||
        {post.content}
      </div>
      <button onClick={() => onChangeSave(post.id)}>
        <FontAwesomeIcon icon={faBookmark} size="1x" />
      </button>
      {post.User.id === user.userId ? (
        <button type="button" onClick={() => onRemovePost(post.id)}>
          삭제
        </button>
      ) : null}
    </>
  );
};

export default PostComponent;
