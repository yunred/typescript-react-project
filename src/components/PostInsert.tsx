import React, { ChangeEvent, useState } from 'react';
import { RootState } from 'modules';
import { addPost, resetDummyPost } from 'modules/post';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as S from 'styles/PostInsertStyle';

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
    setName('');
    setPostContent('');
  };
  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <>
      <S.PostInsertDiv>
        <hr />
        <S.PostBtnDiv>
          <button
            className="reset_btn"
            type="button"
            onClick={() => dispatch(resetDummyPost())}
          >
            Dummy 초기화
          </button>
          <S.SelectBox onChange={onChangeCategory} value={selectedCategory}>
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
          </S.SelectBox>
          <button className="submit_btn" type="button" onClick={onInsert}>
            등록
          </button>
        </S.PostBtnDiv>
        <S.NameInputDiv>
          <S.NameInput
            className="name_input"
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
            placeholder="이름을 입력하세요"
          />
        </S.NameInputDiv>

        <S.ContentInput
          className="content_input"
          name="postContent"
          value={postContent}
          onChange={onChangeTextArea}
          placeholder="내용을 입력하세요"
        />
      </S.PostInsertDiv>
    </>
  );
};

export default PostInsert;
