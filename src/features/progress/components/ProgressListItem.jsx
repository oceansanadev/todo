/* eslint-disable react/prop-types */
import Card from "../../../core/components/Card/Card";
import TodoItemText from "../../../core/components/TodoItemText/TodoItemText";
import Column from "../../../core/components/Column/Column";
import Row from "../../../core/components/Row/Row";
import IconButton from "../../../core/components/IconButton/IconButton";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import kColor from "../../../core/constants/kColor";

function ProgressListItem({
  title,
  createdDate,
  dueDate,
  onEdit,
  onDelete,
  onNavigate,
}) {
  return (
    <Card padding="1rem">
      <Column gap="1rem">
        {title && <TodoItemText onClick={onNavigate}>{title}</TodoItemText>}
        <Row justifyContent="space-between">
          {createdDate && <TodoItemText>Created {createdDate}</TodoItemText>}
          {dueDate && (
            <TodoItemText themeColor={kColor.error}>
              Due Date {dueDate}
            </TodoItemText>
          )}
          {(onEdit || onDelete) && (
            <Row gap="1rem">
              {onEdit && (
                <IconButton onClick={onEdit}>
                  <MdOutlineEdit />
                </IconButton>
              )}
              {onDelete && (
                <IconButton themeColor={kColor.error} onClick={onDelete}>
                  <GoTrash />
                </IconButton>
              )}
            </Row>
          )}
        </Row>
      </Column>
    </Card>
  );
}

export default ProgressListItem;
