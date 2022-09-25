import { TodoInput } from "./components/TodoInput";
import TodosList from "./components/TodosList";

import { useSelector } from "react-redux";
import { RootState } from "./store";

type Todo = {
  body: string;
  isFinished: boolean;
};

function App() {
  const todos = useSelector((state: RootState) => state.todo);
  return (
    <div className="container max-w-lg mt-16 mx-auto">
      <div className="flex flex-col gap-8">
        <h1 className="font-extrabold self-center w-min text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#0575E6] to-[#021B79] ">
          Todododo
        </h1>
        <div>
          <TodoInput />

          <TodosList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
