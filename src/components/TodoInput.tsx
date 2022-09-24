import AddButton from "./ActionsButton";
import Textfield from "./Textfield";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./TodoSlice";

export function TodoInput() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(add(value));
        setValue("");
      }}
      className="p-4 rounded-lg shadow-sm bg-white mt-2 flex flex-row gap-4"
    >
      <Textfield
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        type="submit"
        className={`p-2 shadow-sm rounded-lg cursor-pointer active:-translate-y-1 hover:bg-indigo-600 bg-indigo-500`}
      >
        <MdAdd color={"white"} size={32} />
      </button>
    </form>
  );
}
