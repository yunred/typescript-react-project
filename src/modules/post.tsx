import { produce } from 'immer';

interface IPost {
  id?: string;
  User?: IUser;
  category?: string;
  content?: string;
  saved?: boolean;
}

interface IUser {
  id: string;
  name: string;
}

type PostState = {
  Posts: IPost[];
};

const initialState: PostState = {
  Posts: [
    {
      id: '1',
      User: {
        id: '1',
        name: '사람1',
      },
      category: '',
      content: '첫 번째 게시글',
      saved: false,
    },
    {
      id: '2',
      User: {
        id: '2',
        name: '사람2',
      },
      category: '',
      content: '두 번째 게시글',
      saved: false,
    },
    {
      id: '3',
      User: {
        id: '3',
        name: '사람3',
      },
      category: '',
      content: '세 번째 게시글',
      saved: false,
    },
    {
      id: '4',
      User: {
        id: '4',
        name: '사람4',
      },
      category: '',
      content: '네 번째 게시글',
      saved: false,
    },
  ],
};

const ADD_POST = 'ADD_POST' as const;
const CHANGE_POST_CONTENT = 'CHANGE_POST_CONTENT' as const;
const REMOVE_POST = 'REMOVE_POST' as const;
const CHANGE_POST_SAVE = 'CHANGE_POST_SAVE' as const;

export const addPost = (data: IPost) => ({
  type: ADD_POST,
  data,
});
export const changePostContent = (data: IPost) => ({
  type: CHANGE_POST_CONTENT,
  data,
});
export const removePost = (data: IPost) => ({
  type: REMOVE_POST,
  data,
});
export const changePosSave = (data: IPost) => ({
  type: CHANGE_POST_SAVE,
  data,
});

type PostAction =
  | ReturnType<typeof addPost>
  | ReturnType<typeof changePostContent>
  | ReturnType<typeof removePost>
  | ReturnType<typeof changePosSave>;

const post = (prevState = initialState, action: PostAction) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case ADD_POST:
        draft.Posts.push(action.data);
        break;
      case CHANGE_POST_CONTENT:
        break;
      case REMOVE_POST:
        break;
      case CHANGE_POST_SAVE:
        break;
    }
  });
};

export default post;
