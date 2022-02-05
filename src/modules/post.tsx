import { produce } from 'immer';
import shortId from 'shortid';

export interface IPost {
  id: string;
  User: IUser;
  category: string;
  content: string;
  saved: boolean;
}

export interface IUser {
  id: string;
  name: string;
}

export type PostState = IPost[];

const initialState: PostState = [
  {
    id: '4',
    User: {
      id: '4',
      name: '사람4',
    },
    category: '전체게시판',
    content: '4444 번째 게시글',
    saved: false,
  },
  {
    id: '3',
    User: {
      id: '3',
      name: '사람3',
    },
    category: '게시판2',
    content: '33333 번째 게시글',
    saved: false,
  },
  {
    id: '2',
    User: {
      id: '2',
      name: '사람2',
    },
    category: '전체게시판',
    content: '22222 번째 게시글',
    saved: false,
  },

  {
    id: '1',
    User: {
      id: '1',
      name: '사람1',
    },
    category: '게시판1',
    content: '11111 번째 게시글',
    saved: false,
  },
];

const ADD_POST = 'ADD_POST' as const;
const REMOVE_POST = 'REMOVE_POST' as const;
const CHANGE_POST_SAVE = 'CHANGE_POST_SAVE' as const;
const RESET_DUMMY_POST = 'RESET_DUMMY_POST' as const;

export interface IAddPost {
  User: {
    id: string;
    name: string;
  };
  category: string;
  content: string;
}
export const addPost = (data: IAddPost) => ({
  type: ADD_POST,
  data,
});

export interface IremovePost {
  id: string;
}
export const removePost = (data: IremovePost) => ({
  type: REMOVE_POST,
  data,
});
export const changePostSave = (data: Object) => ({
  type: CHANGE_POST_SAVE,
  data,
});

export const resetDummyPost = () => ({
  type: RESET_DUMMY_POST,
});

type PostAction =
  | ReturnType<typeof addPost>
  | ReturnType<typeof removePost>
  | ReturnType<typeof changePostSave>
  | ReturnType<typeof resetDummyPost>;

const newPost = (data: any) => ({
  id: String(shortId.generate()),
  User: {
    id: data.User.id,
    name: data.User.name,
  },
  category: data.category,
  content: data.content,
  saved: false,
});

const post = (prevState = initialState, action: PostAction) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case ADD_POST:
        console.log(action.data.User.id);
        draft.unshift(newPost(action.data));
        break;
      case REMOVE_POST:
        const index = draft.findIndex(v => v.id === action.data.id);
        console.log(index);
        draft.splice(index, 1);
        // draft = draft.filter(v => v.id !== action.data.id);
        // console.log(action.data.id);
        break;
      case CHANGE_POST_SAVE:
        break;
      case RESET_DUMMY_POST:
        console.log(initialState.length);
        draft.splice(0, initialState.length);
        draft.push(...initialState);

        console.log('됐냐?');
        break;
    }
  });
};

export default post;
