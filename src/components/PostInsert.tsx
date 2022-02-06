import React, { ChangeEvent, useState } from 'react';
import { RootState } from 'modules';
import { addPost, resetDummyPost } from 'modules/post';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// type PostInsertProps = {
//   onInsert: (content: string) => void;
// };
const PostInsert = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [postContent, setPostContent] = useState<string>('');
  const [name, setName] = useState<string>('');
  const categoryList = ['전체게시판', '게시판1', '게시판2'];
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryList[0]
  );
  const { selected } = useParams();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'postContent') {
      setPostContent(e.target.value);
    }
  };
  const onInsert = () => {
    dispatch(
      addPost({
        User: {
          id: user.userId,
          name: name ? name : '익명',
        },
        category: selected ? selected : selectedCategory,
        content: postContent ? postContent : '내용이 없습니다',
      })
    );
  };
  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <>
      <PostInsertDiv>
        <hr />
        <PostBtnDiv>
          <button
            className="reset_btn"
            type="button"
            onClick={() => dispatch(resetDummyPost())}
          >
            Dummy 초기화
          </button>
          <SelectBox onChange={onChangeCategory} value={selectedCategory}>
            {selected && selected !== '전체게시판' ? (
              <>
                <option value={selected}>{selected}</option>
              </>
            ) : (
              <>
                {categoryList.map((item, idx) => (
                  <option value={item} key={idx}>
                    {item}
                  </option>
                ))}
              </>
            )}
          </SelectBox>
          <button className="submit_btn" type="button" onClick={onInsert}>
            등록
          </button>
        </PostBtnDiv>
        <NameInputDiv>
          <NameInput
            className="name_input"
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
            placeholder="이름을 입력하세요"
          />
        </NameInputDiv>

        <ContentInput
          className="content_input"
          name="postContent"
          value={postContent}
          onChange={onChangeTextArea}
          placeholder="내용을 입력하세요"
        />
      </PostInsertDiv>
    </>
  );
};

const PostInsertDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 30px;
  hr {
    margin: 0 auto;
    border: 0;
    height: 1px;
    background-color: #686868;
    margin-bottom: 14px;
  }
`;
const PostBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .reset_btn {
    color: gray;
  }
  .submit_btn {
    padding-left: 6px;
    padding-right: 6px;
    :hover {
      background-color: #d4d4d4;
    }
  }
`;

const SelectBox = styled.select`
  width: 100px;
  height: 32px;
  border: 0;
  outline: none;
`;
const NameInputDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-bottom: 10px;
`;

const NameInput = styled.input`
  border: none;
  border-bottom: 1px solid #f3f3f3;
  height: 32px;
  background-color: #ffffff;
  outline: none;
`;

const ContentInput = styled.textarea`
  border: 1px solid #f3f3f3;
  height: 50px;
  background-color: #ffffff;
  outline: none;
  width: 100%;
`;

export default PostInsert;
