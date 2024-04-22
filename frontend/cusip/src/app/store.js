import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth2/authSlice'
import postReducer from '../features/posts/postSlice'
import chatReducer from '../features/chats/chatSlice'
import questionsReducer from '../features/questions/questionSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    chat: chatReducer,
    questions: questionsReducer,
  },
});
