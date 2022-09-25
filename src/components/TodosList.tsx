import TodoItem from "./TodoItem";
import { IoInformationCircleOutline as Info } from "react-icons/io5";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import { swapPositions } from "./TodoSlice";
import { useDispatch } from "react-redux";

export default function TodosList({ todos = TODOS }) {
  const dispatch = useDispatch();
  return (
    <DragDropContext
      onDragEnd={({ source, destination }) =>
        dispatch(
          swapPositions({ from: source.index, to: destination?.index || 0 })
        )
      }
    >
      <div className="   p-4  rounded-lg shadow-sm bg-white  mt-6 mb-4 font-bold text-neutral-800">
        <div className="text-sm text-neutral-300 font-normal flex flex-row items-center gap-1">
          <Info /> click on an item to mark as completed
        </div>
        <div className="text-sm text-neutral-300 font-normal flex flex-row items-center gap-1">
          <Info /> drag and drop to reorder
        </div>
        {todos.length > 0 && (
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <div
                className="mt-8 flex flex-col gap-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {[...todos].map((props, i) => (
                  <TodoItem i={i} key={i} {...props} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}

        {todos.length < 1 && (
          <p className="mx-auto w-fit py-8 text-neutral-600">
            Its empty out here..
          </p>
        )}
      </div>
    </DragDropContext>
  );
}

const TODOS = [
  { body: "Buy bannas", isFinished: false },
  { body: "Hit the jim", isFinished: true },
];
