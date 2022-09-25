import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./components/TodoSlice";
import { createStateSyncMiddleware } from "redux-state-sync";

export const store = configureStore({
  reducer: { todo: todoSlice },
  middleware: [createStateSyncMiddleware()],
});

const unsubscribe = store.subscribe(() => {
  const currentState = store.getState();
  localStorage.setItem("todoList", JSON.stringify(currentState.todo));
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
