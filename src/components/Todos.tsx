import { type Todo as TodoType, type TodoId, type listOfTodos } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: listOfTodos;
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleted,
}) => {
  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
            <Todo
              key={todo.id}
              {...todo}
              onRemoveTodo={onRemoveTodo}
              onToggleCompletedTodo={onToggleCompleted}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
