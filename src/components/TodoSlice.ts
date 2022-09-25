import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "./TodoItem";

const initialState: TodoType[] = JSON.parse(
  localStorage.getItem("todoList") || "[]"
);

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (action.payload.length < 1) return;
      state.unshift({ body: action.payload, isFinished: false });
    },
    remove: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    toggleFinished: (state, action: PayloadAction<number>) => {
      if (state[action.payload].isFinished)
        state.splice(action.payload, 1, {
          ...state[action.payload],
          isFinished: false,
        });
      else
        state.splice(action.payload, 1, {
          ...state[action.payload],
          isFinished: true,
        });
    },
    swapPositions: (
      state,
      { payload: { from, to } }: PayloadAction<{ from: number; to: number }>
    ) => {
      state.splice(to, 0, state.splice(from, 1)[0]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, toggleFinished, swapPositions } = todoSlice.actions;

export default todoSlice.reducer;
