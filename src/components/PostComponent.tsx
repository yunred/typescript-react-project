import React from 'react';
import { RootState } from 'modules';
import { IPost, removePost, changePostSave } from 'modules/post';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import * as S from 'styles/PostComponentStyle';

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
      <S.PostComponentDiv key={post.id}>
        <S.PostInfo>
          <span className="user_name">{post.User.name}</span>
          <span className="post_category">{post.category}</span>
        </S.PostInfo>
        <S.PostText>
          <span>{post.content}</span>
        </S.PostText>
        <S.BtnDiv>
          <S.BookMarkBtn
            active={post.saved}
            onClick={() => onChangeSave(post.id)}
          >
            <FontAwesomeIcon icon={faBookmark} size="1x" />
          </S.BookMarkBtn>
          {post.User.id === user.userId ? (
            <S.DeleteBtn type="button" onClick={() => onRemovePost(post.id)}>
              <FontAwesomeIcon icon={faTrashAlt} size="1x" />
            </S.DeleteBtn>
          ) : null}
        </S.BtnDiv>
        <hr className="post_hr" />
      </S.PostComponentDiv>
    </>
  );
};

export default PostComponent;
