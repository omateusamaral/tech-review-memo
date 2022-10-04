import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import { iso31661 } from "iso-3166";

export function TodoList() {
  const [text, setText] = useState(``);

  const mockedData = () => {
    console.log(`renderizou os dados`);
    return iso31661.map((country) => {
      return {
        name: country.name,
        alpha: country.alpha2,
      };
    });
  };
  // const mockedDataMemoized = useMemo(() => mockedData(), []);

  return (
    <div>
      <h4>Tech review</h4>
      <input
        placeholder="Digite seu nome"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <ul>
        {mockedData().map((todo, index) => (
          <TodoItem {...todo} key={index} />
        ))}
      </ul>
    </div>
  );
}
