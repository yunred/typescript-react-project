import React from 'react';
import { RootState } from 'modules';
import { IPost, removePost, changePostSave } from 'modules/post';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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
      <PostComponentDiv key={post.id}>
        <PostInfo>
          <span className="user_name">{post.User.name}</span>
          <span className="post_category">{post.category}</span>
        </PostInfo>
        <PostText>
          <span>{post.content}</span>
        </PostText>
        <BtnDiv>
          <BookMarkBtn
            active={post.saved}
            onClick={() => onChangeSave(post.id)}
          >
            <FontAwesomeIcon icon={faBookmark} size="1x" />
          </BookMarkBtn>
          {post.User.id === user.userId ? (
            <DeleteBtn type="button" onClick={() => onRemovePost(post.id)}>
              <FontAwesomeIcon icon={faTrashAlt} size="1x" />
            </DeleteBtn>
          ) : null}
        </BtnDiv>
        <hr className="post_hr" />
      </PostComponentDiv>
    </>
  );
};

const PostComponentDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: white;

  .post_hr {
    margin: 0 auto;
    border: 0;
    height: 1px;
    background-color: #f5f5f5;
  }
`;

const PostInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .post_category {
    color: gray;
    font-size: 12px;
  }
  .user_name {
    font-weight: 700;
  }
`;
const PostText = styled.div`
  word-wrap: break-word;
  margin: 14px 0px;
`;
const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
type activeType = {
  active: boolean;
};
const BookMarkBtn = styled.button<activeType>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: #969696;
  }
  :active {
    color: black;
  }
  color: ${props => {
    if (props.active) {
      return 'black';
    } else {
      return 'rgb(212,212,212)';
    }
  }};
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  color: rgb(212, 212, 212);
  cursor: pointer;
  :hover {
    color: #969696;
  }
`;

export default PostComponent;
