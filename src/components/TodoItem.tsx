import ActionButton from "./ActionsButton";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, toggleFinished } from "./TodoSlice";

export default function TodoItem({
  body,
  isFinished,
  i,
}: TodoType & { i: number }) {
  const dispatch = useDispatch();

  return (
    <div className={`py-2 justify-between items-center flex flex-row gap-8 `}>
      <p
        onClick={() => {
          dispatch(toggleFinished(i));
        }}
        className={`${
          isFinished && "line-through	text-neutral-400 font-medium"
        } cursor-pointer self-center select-none py-4 grow capitalize`}
      >
        {body}
      </p>
      <ActionButton
        onClick={() => {
          dispatch(remove(i));
        }}
        Icon={MdDelete}
        size={24}
        color="#ef4444"
      />
    </div>
  );
}

export type TodoType = {
  body: string;
  isFinished: boolean;
};
