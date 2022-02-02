import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import post from './post';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  post,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
