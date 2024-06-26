import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./core/components/Layout/Layout";
import HomePage from "./features/home/pages/HomePage";
import CreateTaskPage from "./features/home/pages/CreateTaskPage";
import TodoListPage from "./features/Todo/pages/TodoListPage";
import TodoDetailsPage from "./features/Todo/pages/TodoDetailsPage";
import ProgressListPage from "./features/progress/pages/ProgressListPage";
import ProgressDetailsPage from "./features/progress/pages/ProgressDetailsPage";
import CompletedListPage from "./features/completed/pages/CompletedListPage";
import CompletedDetailsPage from "./features/completed/pages/CompletedDetailsPage";
import OverdueListPage from "./features/overdue/pages/OverdueListPage";
import OverdueDetailsPage from "./features/overdue/pages/OverdueDetailsPage";
import DeletedListPage from "./features/deleted/pages/DeletedListPage";
import DeletedDetailsPage from "./features/deleted/pages/DeletedDetailsPage";

function App() {
  return (
    <BrowserRouter basename="/todo">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/createTask" element={<CreateTaskPage />} />
          <Route path="/todoList" element={<TodoListPage />} />
          <Route path="/todoDetails" element={<TodoDetailsPage />} />
          <Route path="/progressList" element={<ProgressListPage />} />
          <Route path="/progressDetails" element={<ProgressDetailsPage />} />
          <Route path="/completedList" element={<CompletedListPage />} />
          <Route path="/completedDetails" element={<CompletedDetailsPage />} />
          <Route path="/overdueList" element={<OverdueListPage />} />
          <Route path="/overdueDetails" element={<OverdueDetailsPage />} />
          <Route path="/deletedList" element={<DeletedListPage />} />
          <Route path="/deletedDetails" element={<DeletedDetailsPage />} />
          <Route path="*" element={<p>Some error</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
