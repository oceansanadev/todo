import AppBar from "../../../core/components/AppBar/AppBar";
import Summary from "../../../core/components/Summary/Summary";
import kColor from "../../../core/constants/kColor";
import TextInput from "../../../core/components/TextInput/TextInput";
import Button from "../../../core/components/Button/Button";
import Scaffold from "../../../core/components/Scaffold/Scaffold";
import Spacer from "../../../core/components/Spacer/Spacer";

function CreateTaskPage() {
  const textStyle = {
    color: kColor.greyDark,
  };

  return (
    <Scaffold>
      <AppBar />
      <Summary
        title={"Make plans to get things started"}
        subtitle1={"You are almost there"}
        subtitle2={"You already have 20 tasks in todo list"}
      />
      <h3 style={textStyle}>Update task details</h3>
      <TextInput placeholder={"This is your task details"} />
      <Spacer />
      <Button>Update</Button>
    </Scaffold>
  );
}

export default CreateTaskPage;
