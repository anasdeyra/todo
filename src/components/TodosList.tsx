import TodoItem from "./TodoItem";
import { IoInformationCircleOutline as Info } from "react-icons/io5";

export default function TodosList({ todos = TODOS }) {
  return (
    <div className="   p-4  rounded-lg shadow-sm bg-white  mt-6 mb-4 font-bold text-neutral-800">
      <div className="text-sm text-neutral-300 font-normal flex flex-row items-center gap-1">
        <Info /> click on an item to mark as completed
      </div>
      <div className="divide-y flex flex-col gap-0">
        {todos.length > 0 ? (
          todos.map((props, i) => <TodoItem i={i} key={i} {...props} />)
        ) : (
          <p className="self-center py-8 text-neutral-600">
            Its empty out here..
          </p>
        )}
      </div>
    </div>
  );
}

const TODOS = [
  { body: "Buy bannas", isFinished: false },
  { body: "Hit the jim", isFinished: true },
];
