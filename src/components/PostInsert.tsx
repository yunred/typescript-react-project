import React, { ChangeEvent, useState } from 'react';
import { RootState } from 'modules';
import post, { addPost } from 'modules/post';
import { IPost } from 'modules/post';
import { useSelector, useDispatch } from 'react-redux';

// type PostInsertProps = {
//   onInsert: (content: string) => void;
// };
const PostInsert = () => {
  const posts = useSelector((state: RootState) => state.post);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [postContent, setPostContent] = useState<string>('');
  const [name, setName] = useState<string>('');
  const categoryList = ['전체게시판', '게시판1', '게시판2'];
  const [selected, setSelected] = useState<string>(categoryList[0]);
  console.log(user.userId);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
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
          name: name,
        },
        category: selected,
        content: postContent,
      })
    );
  };
  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  return (
    <>
      <div>
        <select onChange={onChangeCategory} value={selected}>
          {categoryList.map((item, idx) => (
            <option value={item} key={idx}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeInput}
          placeholder="이름을 입력하세요"
        />
        <input
          type="text"
          name="postContent"
          value={postContent}
          onChange={onChangeInput}
          placeholder="내용을 입력하세요"
        />
        <button type="button" onClick={onInsert}>
          등록
        </button>
      </div>
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

export default PostInsert;
