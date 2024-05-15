import { useNavigate } from "react-router-dom";
import Scaffold from "../../../core/components/Scaffold/Scaffold";
import Summary from "../../../core/components/Summary/Summary";
import Appbar from "../../../core/components/AppBar/AppBar";
import ProgressListItem from "../components/ProgressListItem";
import kColor from "../../../core/constants/kColor";

const PROGRESS_LIST = [
  {
    id: 1,
    title: "Walking is the best exercise",
    createdDate: "20/01/2023",
    dueDate: "20/02/2023",
    path: "/progressDetails",
  },
  {
    id: 2,
    title: "This is your progess item",
    createdDate: "10/03/2023",
    dueDate: "19/03/2023",
    path: "/progressDetails",
  },
];

function ProgressListPage() {
  const navigate = useNavigate();

  return (
    <Scaffold>
      <Appbar />
      <Summary
        title={"In Progress task list"}
        subtitle2={"You have 20 task"}
        themeColor={kColor.warning}
      />
      {PROGRESS_LIST.map((item) => (
        <ProgressListItem
          key={item.id}
          {...item}
          onNavigate={() => navigate(item.path)}
          onEdit={() => console.log("Edit " + item.id)}
          onDelete={() => console.log("DElete " + item.id)}
        />
      ))}
    </Scaffold>
  );
}

export default ProgressListPage;
