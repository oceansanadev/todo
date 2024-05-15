import Scaffold from "../../../core/components/Scaffold/Scaffold";
import ProgressListItem from "../components/ProgressListItem";
import Summary from "../../../core/components/Summary/Summary";
import Appbar from "../../../core/components/AppBar/AppBar";
import kColor from "../../../core/constants/kColor";
import Button from "../../../core/components/Button/Button";
import Spacer from "../../../core/components/Spacer/Spacer";
import { useNavigate } from "react-router-dom";

function ProgressDetailsPage() {
  const navigate = useNavigate();

  return (
    <Scaffold>
      <Appbar />
      <Summary title={"In Progress"} themeColor={kColor.warning} />
      <ProgressListItem
        title={"This is your task details"}
        createdDate={"22/01/2023"}
        dueDate={"22/01/2023"}
        onEdit={() => console.log("Edit")}
        onDelete={() => console.log("Delete")}
      />
      <Spacer />
      <Button onClick={() => navigate("/completedList")}>Update Status</Button>
    </Scaffold>
  );
}

export default ProgressDetailsPage;
