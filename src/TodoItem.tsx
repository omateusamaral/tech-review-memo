import { memo } from "react";
let i = 0;
export interface TodoItemProps {
  name: string;
  alpha: string;
}
function TodoItem(todo: TodoItemProps) {
  console.log(`renderizou`, i++);

  return (
    <>
      <div>Nome: {todo.name}</div>
      <strong>{todo.alpha}</strong>
    </>
  );
}

export default TodoItem;
// export default memo(TodoItem);
