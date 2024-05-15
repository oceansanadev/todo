/* eslint-disable react/prop-types */
import { GoTrash } from "react-icons/go";
import Card from "../../../core/components/Card/Card";
import TodoItemText from "../../../core/components/TodoItemText/TodoItemText";
import IconButton from "../../../core/components/IconButton/IconButton";
import Column from "../../../core/components/Column/Column";
import Row from "../../../core/components/Row/Row";
import kColor from "../../../core/constants/kColor";

function CompletedListItem({
  title,
  createdDate,
  completedDate,
  dueDate,
  onDelete,
  onNavigate,
}) {
  return (
    <Card themeColor={kColor.success} padding="1rem">
      <Column gap="1rem">
        {title && <TodoItemText onClick={onNavigate}>{title}</TodoItemText>}
        {createdDate && <TodoItemText>Created {createdDate}</TodoItemText>}

        {(completedDate || dueDate || onDelete) && (
          <Row justifyContent="space-between">
            {completedDate && (
              <TodoItemText>Completed {completedDate}</TodoItemText>
            )}
            {dueDate && (
              <TodoItemText themeColor={kColor.error}>
                Due Date {dueDate}
              </TodoItemText>
            )}
            {onDelete && (
              <IconButton onClick={onDelete} themeColor={kColor.error}>
                <GoTrash />
              </IconButton>
            )}
          </Row>
        )}
      </Column>
    </Card>
  );
}

export default CompletedListItem;
