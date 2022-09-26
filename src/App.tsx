import { useState } from "react";
import * as C from "./app.styles";
import { Item } from "./Types/Item";
import { ListItem } from "./Components/ListItem";
import { AddArea } from "./Components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão", done: false },
    { id: 2, name: "Fazer feira", done: false },
    { id: 3, name: "Jantar de casamento", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item}></ListItem>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
