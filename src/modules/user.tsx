import { produce } from 'immer';
import shortId from 'shortid';

type userIdState = {
  userId: string;
};
const initialState: userIdState = {
  userId: shortId.generate(),
};
const CHANGE_USERID = 'CHANGE_USERID' as const;
export const changeUserID = () => ({
  type: CHANGE_USERID,
});

type UserAction = ReturnType<typeof changeUserID>;

const user = (prevState = initialState, action: UserAction) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case CHANGE_USERID:
        draft.userId = shortId.generate();
    }
  });
};

export default user;
