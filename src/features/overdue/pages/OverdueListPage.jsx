import Appbar from "../../../core/components/AppBar/AppBar";
import Scaffold from "../../../core/components/Scaffold/Scaffold";
import Summary from "../../../core/components/Summary/Summary";
import kColor from "../../../core/constants/kColor";
import OverdueListItem from "../components/OverdueListItem";
import { useNavigate } from "react-router-dom";

const OVERDUE_LIST = [
  {
    id: 1,
    title: "This is your task details",
    createdDate: "12/02/2023",
    dueDate: "12/02/2023",
  },
  {
    id: 2,
    title: "Walking is good for health",
    createdDate: "12/02/2024",
    dueDate: "12/02/2024",
  },
];

function OverdueListPage() {
  const navigate = useNavigate();

  return (
    <Scaffold>
      <Appbar />
      <Summary
        title={"Overdue task list"}
        subtitle2={"You have 20 task"}
        themeColor={kColor.error}
      />
      {OVERDUE_LIST.map((item) => (
        <OverdueListItem
          key={item.id}
          {...item}
          onEdit={() => console.log("EDIT " + item.id)}
          onDelete={() => console.log("DELETE " + item.id)}
          onNavigate={() => navigate("/overdueDetails")}
        />
      ))}
    </Scaffold>
  );
}

export default OverdueListPage;
