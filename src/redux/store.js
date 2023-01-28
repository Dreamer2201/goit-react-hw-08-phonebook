import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-Slice';
import contactsReducer from './contacts/contacts-Slice';
import filterReducer from './filter/filter-Slice';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}

const contactsPersistConfig ={
  key: 'family',
  storage,
  whitelist: ['family'],
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);


const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}
);

const persistor = persistStore(store);

export { store, persistor };


