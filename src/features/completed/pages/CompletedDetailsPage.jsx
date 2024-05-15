import Scaffold from "../../../core/components/Scaffold/Scaffold";
import Appbar from "../../../core/components/AppBar/AppBar";
import Summary from "../../../core/components/Summary/Summary";
import CompletedListItem from "../components/CompletedListItem";
import kColor from "../../../core/constants/kColor";

function CompletedDetailsPage() {
  return (
    <Scaffold>
      <Appbar />
      <Summary title={"Completed"} themeColor={kColor.success} />
      <CompletedListItem
        title={"This is your completed item"}
        createdDate={"12/02/2023"}
        completedDate={"12/02/2023"}
        dueDate={"12/02/2023"}
      />
    </Scaffold>
  );
}

export default CompletedDetailsPage;
