import Scaffold from "../../../core/components/Scaffold/Scaffold";
import Appbar from "../../../core/components/AppBar/AppBar";
import Summary from "../../../core/components/Summary/Summary";
import kColor from "../../../core/constants/kColor";
import OverdueListItem from "../components/OverdueListItem";

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

const ITEM = OVERDUE_LIST[0];

function OverdueDetailsPage() {
  return (
    <Scaffold>
      <Appbar />
      <Summary title={"Overdue"} themeColor={kColor.error} />
      <OverdueListItem
        {...ITEM}
        onEdit={() => console.log("EDIT")}
        onDelete={() => console.log("DELETE")}
      />
    </Scaffold>
  );
}

export default OverdueDetailsPage;
