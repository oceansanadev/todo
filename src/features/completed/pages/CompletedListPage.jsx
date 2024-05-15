import { useNavigate } from "react-router-dom";
import Scaffold from "../../../core/components/Scaffold/Scaffold";
import Appbar from "../../../core/components/AppBar/AppBar";
import Summary from "../../../core/components/Summary/Summary";
import kColor from "../../../core/constants/kColor";
import CompletedListItem from "../components/CompletedListItem";

const COMPLETED_LIST = [
  {
    id: 1,
    title: "Walking is good for health",
    createdDate: "20/01/2023",
    dueDate: "20/01/2023",
    completedDate: "20/01/2023",
  },
  {
    id: 2,
    title: "This is your completed item",
    createdDate: "20/01/2024",
    dueDate: "20/01/2024",
    completedDate: "20/01/2024",
  },
];

function CompletedListPage() {
  const navigate = useNavigate();

  return (
    <Scaffold>
      <Appbar />
      <Summary
        title={"Completed task list"}
        subtitle2={"You have 20 task"}
        themeColor={kColor.success}
      />
      {COMPLETED_LIST.map((item) => (
        <CompletedListItem
          key={item.id}
          {...item}
          onNavigate={() => navigate("/completedDetails")}
          onDelete={() => console.log("Delete " + item.id)}
        />
      ))}
    </Scaffold>
  );
}

export default CompletedListPage;
