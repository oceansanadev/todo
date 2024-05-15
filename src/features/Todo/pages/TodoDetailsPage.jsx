import Appbar from "../../../core/components/AppBar/AppBar";
import Summary from "../../../core/components/Summary/Summary";
import TodoItem from "../components/TodoItem";
import kColor from "../../../core/constants/kColor";
import Button from "../../../core/components/Button/Button";
import Spacer from "../../../core/components/Spacer/Spacer";
import Scaffold from "../../../core/components/Scaffold/Scaffold";

function TodoDetailsPage() {
  return (
    <Scaffold>
      <Appbar />
      <Summary title={"Todo"} />
      <TodoItem
        title={"This is your task details"}
        createdDate={"02/01/2023"}
        themeColor={kColor.success}
      />

      <Spacer />
      <Button>Start Task</Button>
    </Scaffold>
  );
}

export default TodoDetailsPage;
