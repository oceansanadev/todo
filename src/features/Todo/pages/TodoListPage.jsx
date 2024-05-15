import { useNavigate } from "react-router-dom";
import Appbar from "../../../core/components/AppBar/AppBar";
import Summary from "../../../core/components/Summary/Summary";
import Scaffold from "../../../core/components/Scaffold/Scaffold";
import useDialog from "../../../core/components/Dialog/useDialog";
import Dialog from "../../../core/components/Dialog/Dialog";
import DialogMessage from "../../../core/components/Dialog/DialogMessage";

import TodoItem from "../components/TodoItem";

const TODO_LIST = [
  {
    id: 1,
    title: "Walking is good for health",
    createdDate: "25/02/2022",
  },
  { id: 2, title: "React Js is written in JS", createdDate: "21/04/2023" },
  { id: 3, title: "Typescript is superset of JS", createdDate: "01/02/2023" },
];

function TodoListPage() {
  const navigate = useNavigate();
  const { ref, toggleDialog } = useDialog();

  const gotoTodoDetailsPage = () => navigate("/todoDetails");

  return (
    <Scaffold>
      <Appbar />
      <Summary title={"Todo task list"} subtitle2={"You have 20 task list"} />
      <Dialog ref={ref} onClose={toggleDialog}>
        <DialogMessage onAccept={toggleDialog} onReject={toggleDialog} />
      </Dialog>
      {TODO_LIST.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onNavigate={gotoTodoDetailsPage}
          onEdit={() => console.log("Edit " + todo.id)}
          onDelete={toggleDialog}
        />
      ))}
    </Scaffold>
  );
}

export default TodoListPage;
