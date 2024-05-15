import Header from "../components/Header";
import Summary from "../../../core/components/Summary/Summary";
import CategoryList from "../components/CategoryList";
import Button from "../../../core/components/Button/Button";
import Scaffold from "../../../core/components/Scaffold/Scaffold";
import { useNavigate } from "react-router-dom";
import profilePic from "../../../assets/images/profile.jpeg";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Scaffold>
      <Header
        title={"Hey, Boycha"}
        subtitle={"Let us make this day productive"}
        imageUrl={profilePic}
      />
      <Summary
        title={"Hurray!"}
        subtitle1={"You are almost there"}
        subtitle2={"20 out of 30 task are completed"}
      />
      <CategoryList />
      <Button variant="filled" onClick={() => navigate("/createTask")}>
        Create Tasks
      </Button>
    </Scaffold>
  );
}

export default HomePage;
