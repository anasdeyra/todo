import ActionButton from "./ActionsButton";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, toggleFinished } from "./TodoSlice";
import { Draggable } from "react-beautiful-dnd";

export default function TodoItem({
  body,
  isFinished,
  i,
}: TodoType & { i: number }) {
  const dispatch = useDispatch();

  return (
    <Draggable index={i} draggableId={String(i)}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`py-2  text-neutral-700 justify-between items-center flex flex-row gap-8 ${
            snapshot.isDragging ? "bg-neutral-200" : "bg-neutral-100"
          }  px-4 rounded-md`}
        >
          <p
            onClick={() => {
              dispatch(toggleFinished(i));
            }}
            className={`${
              isFinished && "font-medium text-neutral-400 line-through"
            } cursor-pointer self-center select-none py-2 grow`}
          >
            {body}
          </p>
          <button
            onClick={() => {
              dispatch(remove(i));
            }}
            className={`p-2 shadow-sm rounded-lg cursor-pointer active:-translate-y-1 hover:bg-neutral-50 bg-white`}
          >
            <MdDelete color={"#ef4444"} size={18} />
          </button>
        </div>
      )}
    </Draggable>
  );
}

export type TodoType = {
  body: string;
  isFinished: boolean;
};
