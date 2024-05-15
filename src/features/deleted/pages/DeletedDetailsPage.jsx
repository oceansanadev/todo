import Appbar from "../../../core/components/AppBar/AppBar";
import Scaffold from "../../../core/components/Scaffold/Scaffold";
import Summary from "../../../core/components/Summary/Summary";
import DeletedListItem from "../components/DeletedListItem";
import kColor from "../../../core/constants/kColor";
import { useNavigate } from "react-router-dom";

const DELETED_LIST = [
  {
    id: 1,
    title: "This is your task details",
    createdDate: "23/02/2023",
    deletedDate: "23/02/2023",
    dueDate: "23/02/2023",
    themeColor: kColor.warning,
  },
  {
    id: 2,
    title: "This is your task details",
    createdDate: "23/02/2023",
    deletedDate: "23/02/2023",
    dueDate: "23/02/2023",
    completedDate: "23/02/2023",
    themeColor: kColor.success,
  },
  {
    id: 3,
    title: "This is your task details",
    createdDate: "23/02/2023",
    deletedDate: "23/02/2023",
    dueDate: "23/02/2023",
    themeColor: kColor.error,
  },
];

function DeletedDetailsPage() {
  const navigate = useNavigate();

  return (
    <Scaffold>
      <Appbar />
      <Summary title={"Deleted"} themeColor={kColor.greyDark} />
      {DELETED_LIST.map((item) => (
        <DeletedListItem
          key={item.id}
          {...item}
          onNavigate={() => navigate("/deletedDetails")}
        />
      ))}
    </Scaffold>
  );
}

export default DeletedDetailsPage;
