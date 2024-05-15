import CategoryItem from "./CategoryItem";
import kColor from "../../../core/constants/kColor";

const CATEGORY_LIST = [
  {
    id: 1,
    label: "Todo",
    totalTask: 5,
    themeColor: kColor.primaryMain,
    path: "todoList",
  },
  {
    id: 2,
    label: "In Progress",
    totalTask: 10,
    themeColor: kColor.warning,
    path: "progressList",
  },
  {
    id: 3,
    label: "Completed",
    totalTask: 21,
    themeColor: kColor.success,
    path: "completedList",
  },
  {
    id: 4,
    label: "Overdue",
    totalTask: 15,
    themeColor: kColor.error,
    path: "overdueList",
  },
  {
    id: 5,
    label: "Deleted",
    totalTask: 8,
    themeColor: kColor.greyDark,
    path: "deletedList",
  },
];

function CategoryList() {
  const containerStyle = {
    // border: "1px solid grey",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
  };

  const statsTextStyle = {
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: kColor.primaryMain,
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h3>Taks</h3>
        <p style={statsTextStyle}>View all 30 tasks</p>
      </div>
      <div style={gridContainerStyle}>
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
